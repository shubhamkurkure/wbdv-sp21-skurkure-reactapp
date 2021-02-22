import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    const cancelTitle = () => {
        setEditing(false)
    }

    return (
        <div className="row">

            <div class="col-1 courseRowEmpty"/>
            <div class="col-2 courseRowTitle">
                <i class="fas fa-file"/> &nbsp;
                {
                    !editing &&
                    <Link to="/courses/editor">
                        {title}
                    </Link>
                }
                {
                    editing &&
                    <input id="titleinput"
                           onChange={(event) => setNewTitle(event.target.value)}
                           value={newTitle}
                           className="form-control"/>
                }
            </div>
            <div class="col-2 courseRowOwner" style={{textAlign: 'center'}}>{owner}</div>
            <div class="col-2 courseRowTime" style={{textAlign: 'center'}}>{lastModified}</div>
            <div class="col-1 courseRowEmpty"/>
            <div class="col-1" style={{textAlign: 'center'}}>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"/>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-check"/>}
                &nbsp;&nbsp;&nbsp;
                {editing && <i onClick={() => cancelTitle()} className="fas fa-times"/>}
            </div>
            <div class="col-1" style={{textAlign: 'center'}}><i onClick={() => deleteCourse(course)}
                                                                className="fas fa-trash"/></div>
            <div class="col-1 courseRowEmpty"/>
            <br/>
        </div>

    )
}
export default CourseRow
