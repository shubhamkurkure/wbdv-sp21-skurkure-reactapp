import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import '../../styles/course-list.style.client.css'

export default class CourseGrid
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return (
            <div className="rowPaddingTop">
                <nav className="secondHeader">
                    <div className="col-9"/>
                    <div className="col-1">
                        <i className="fas fa-folder-open"/>
                        <i className="fas fa-sort-alpha-down"/>
                    </div>
                    <div className="col-1"/>
                    <div className="col-1" style={{textAlign: 'center'}}>
                        <Link to="/courses/table">
                            <i style={{color: 'black'}} className="fas fa-2x fa-list float-right"/>
                        </Link>
                    </div>
                    <div className="col-1"/>
                </nav>

                <div class="row">
                    {
                        this.props.courses.map((course, ndx) =>
                                                   <CourseCard
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


            </div>
        )
    }
}
