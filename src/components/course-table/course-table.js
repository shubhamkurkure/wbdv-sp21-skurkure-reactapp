import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import '../../styles/course-list.style.client.css'

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <div className="rowPaddingTop">
                <nav className="secondHeader" style={{textAlign: 'center'}}>
                    <div className="col-1 courseRowEmpty"/>
                    <div className="col-2 courseRowTitle"><h6>Title&nbsp;<i className="fa fa-book"
                                                                            aria-hidden="true"/>
                    </h6></div>
                    <div className="col-2 courseRowOwner"><h6>Owned by&nbsp; <i
                        className="fa fa-arrow-down" aria-hidden="true"/></h6></div>
                    <div className="col-2 courseRowTime"><h6>Last modified</h6></div>
                    <div className="col-1 courseRowSort">
                        <i className="fas fa-folder-open"/> &nbsp;
                        <i className="fas fa-sort-alpha-down"/>
                    </div>
                    <div className="col-1 courseRowEmpty"/>
                    <div className="col-1 courseRowEmpty"/>
                    <div className="col-1 courseRowGallery">
                        <Link to="/courses/grid">
                            <i style={{color: 'black'}} className="fas fa-2x fa-th float-right"/>
                        </Link>
                    </div>
                </nav>

                {
                    this.props.courses.map((course, ndx) =>
                                               <CourseRow
                                                   updateCourse={this.props.updateCourse}
                                                   deleteCourse={this.props.deleteCourse}
                                                   key={ndx}
                                                   course={course}
                                                   title={course.title}
                                                   owner={course.owner}
                                                   lastModified={course.lastModified}
                                               />)
                }

            </div>
        )
    }
}
