import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course,
        title
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
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <br/>
            <div className="card">
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">
                        {
                            !editing &&
                            <Link to="/courses/editor">
                                {course.title}
                            </Link>
                        }
                        {
                            editing &&
                            <input
                                onChange={(event) => setNewTitle(event.target.value)}
                                value={newTitle}
                                className="form-control"/>
                        }
                    </h5>
                    <p className="card-text" style={{textAlign: 'justify'}}>
                        This is a sample course card. The course cards are rendered in the Course
                        Grid Component. This layout is responsive to sm, md and lg screens.
                    </p>


                    <div class="row">
                        <div class="col">
                            <Link to="/courses/editor" className="btn btn-primary">
                                {course.title}
                            </Link>
                        </div>
                        <div class="col" style={{textAlign: 'right'}}>
                            {!editing && <i onClick={() => setEditing(true)}
                                            className="fas fa-edit"/>}
                            &nbsp;&nbsp;&nbsp;
                            {editing && <i onClick={() => saveTitle()}
                                           className="fas  fa-check"/>}
                            &nbsp;&nbsp;&nbsp;
                            {editing && <i onClick={() => cancelTitle()}
                                           className="fas fa-times"/>}
                            &nbsp;&nbsp;&nbsp;
                            <i onClick={() => deleteCourse(course)} className="fas  fa-trash"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default CourseCard
