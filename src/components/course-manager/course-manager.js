import React from 'react'
import CourseTable from "../course-table/course-table";
import CourseGrid from "../course-grid/course-grid";
import CourseEditor from "../course-editor/course-editor";
import {Link, Route} from "react-router-dom";
import courseService, {findAllCourses, deleteCourse} from "../../services/course-service";
import '../../styles/course-list.style.client.css'

class CourseManager extends React.Component {
    state = {
        courses: [],
    }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (crse) => crse._id === course._id ? course : crse)
            })))
    }

    componentDidMount = () =>
        findAllCourses()
            .then(courses => this.setState({courses}))

    addCourse = () => {
        if (document.getElementById('newCourseTitle').value) {
            const newCourse = {
                title: document.getElementById('newCourseTitle').value,
                owner: "me",
                lastModified: "02/22/2021"
            }
            courseService.createCourse(newCourse)
                .then(course => this.setState(
                    (prevState) => ({
                        ...prevState,
                        courses: [
                            ...prevState.courses,
                            course
                        ]
                    })))
        } else {
            alert('Enter the Name of the Course in the input box to create a New Course!');
        }
        document.getElementById('newCourseTitle').value = ''
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    render() {
        return (
            <div>


                <button type="button" onClick={this.addCourse} id="addCourseHoverBtn"
                        className="btn btn-danger addCourse addCourseHover">
                    <i className="fas fa-plus"/>
                </button>

                <nav className="headerNavBar bg-primary">
                    <div className="col-1">
                        <button type="button" className="btn btn-primary">
                            <i className="fas fa-bars"/>
                        </button>
                    </div>
                    <div className="col-4 colCourseManager">
                        <label className="lblCourseManager"><b>Course Manager</b></label>
                    </div>
                    <div className="col-4 colNewCourseTitle">
                        <input type="text" className="form-control" id="newCourseTitle"
                               placeholder="New course title"/>
                    </div>
                    <div className="col-1">
                        <button type="button" onClick={this.addCourse} id="addCourseNavBtn"
                                className="btn btn-danger addCourse">
                            <i className="fas fa-plus"/>
                        </button>
                    </div>
                    <div className="col-1">
                    </div>
                    <div className="col-1">
                        <Link to="/">
                            <i style={{color: 'black'}} className="fas fa-2x fa-home float-right"/>
                        </Link>
                    </div>
                </nav>

                <Route path="/courses/table">
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid">
                    <CourseGrid
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/editor"
                       render={(props) => <CourseEditor {...props}/>}>
                </Route>

            </div>
        )
    }
}

export default CourseManager