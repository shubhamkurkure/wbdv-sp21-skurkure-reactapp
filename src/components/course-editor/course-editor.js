import React from 'react'
import '../../styles/course-editor.style.client.css'

const CourseEditor = ({history}) =>
    <div>
        <h2>
            <i onClick={() => history.goBack()}
               className="fas fa-arrow-left"/>
            Course Editor
            <i onClick={() => history.goBack()}
               className="fas fa-times float-right"/>
        </h2>


        <button id="collapseBtn" className="btn btn-primary" type="button" data-toggle="collapse"
                data-target="#testCollapse" aria-expanded="false" aria-controls="collapseExample">
            View modules
        </button>
        <div className="content">
            <div className="courseSection  bg-dark" style={{paddingTop: '1.5em'}} id="testCollapse">
                <div className="courseModuleTitle bg-secondary rounded">
                    <button type="button" className="btn  courseSectionTitle ">Module 1 - jQuery
                    </button>
                    <button type="button" className="btn courseSectionIcon"><i
                        className="fas fa-times"/></button>
                </div>
                <div className="courseModuleTitle bg-secondary rounded moduleSelected">
                    <button type="button" className="btn courseSectionTitle">Module 2 - React
                    </button>
                    <button type="button" className="btn courseSectionIcon"><i
                        className="fas fa-times"/></button>
                </div>
                <div className="courseModuleTitle bg-secondary rounded">
                    <button type="button" className="btn  courseSectionTitle">Module 3 - Redux
                    </button>
                    <button type="button" className=" btn courseSectionIcon"><i
                        className="fas fa-times"/></button>
                </div>
                <div className="courseModuleTitle bg-secondary rounded">
                    <button type="button" className="btn courseSectionTitle">Module 4 - Native
                    </button>
                    <button type="button" className="btn courseSectionIcon"><i
                        className="fas fa-times"/></button>
                </div>
                <div className="courseModuleTitle bg-secondary rounded">
                    <button type="button" className="btn courseSectionTitle">Module 5 - Angular
                    </button>
                    <button type="button" className="btn courseSectionIcon"><i
                        className="fas fa-times"/></button>
                </div>
                <div className="courseModuleTitle bg-secondary rounded">
                    <button type="button" className="btn courseSectionTitle">Module 6 - Node
                    </button>
                    <button type="button" className="btn courseSectionIcon"><i
                        className="fas fa-times"/></button>
                </div>
                <div style={{textAlign: 'right'}}>
                    <button type="button" className="btn courseSectionIcon "><i
                        className="fas fa-plus"/></button>
                </div>
            </div>
            <div className="courseSectionModule bg-light rounded">
                <ul className="nav nav-tabs " id="myTab" role="tablist">
                    <li className="nav-item ">
                        <a className="nav-link active" id="topicOne" data-toggle="tab"
                           href="#topic1" role="tab" aria-controls="home" aria-selected="true">Topic
                            1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="topicTwo" data-toggle="tab" href="#topic2"
                           role="tab" aria-controls="profile" aria-selected="false">Topic 2</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" id="topicThree" data-toggle="tab" href="#topic3"
                           role="tab" aria-controls="contact" aria-selected="false">Topic 3</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" id="add-topic" data-toggle="tab" href="#addTopic"
                           role="tab" aria-controls="contact" aria-selected="false"><i
                            className="fas fa-plus"/></a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="topic1" role="tabpanel"
                         aria-labelledby="home-tab">
                        <div className="topicContent">
                            <div className="topicPreview">
                                <button type="button" className="btn btn-success">Save</button>
                                <h6>Preview</h6>
                                <button type="button" className="btn"><i
                                    className="fas fa-toggle-off fa-lg"/></button>
                            </div>
                            <div>
                                <div className="topicHeadHeader">
                                    <div className="topicHeadHeader-left"><h4>Heading widget</h4>
                                    </div>
                                    <div className="topicHeadHeader-right">
                                        <button type="button"
                                                className="btn btn-warning btntopicHeader"><span><i
                                            className="fas fa-arrow-up"/></span></button>
                                        <button type="button"
                                                className="btn btn-warning btntopicHeader"><span><i
                                            className="fas fa-arrow-down"/></span></button>
                                        <select className="custom-select mr-sm-2">
                                            <option value="Heading" selected>Heading</option>
                                            <option value="Paragraph">Paragraph</option>
                                            <option value="List">List</option>
                                            <option value="Image">Image</option>
                                        </select>
                                        <button className="btn btn-danger"><i
                                            className="fas fa-times"/></button>
                                    </div>
                                </div>
                                <div className="headingInputText">
                                    <input className="form-control" type="text"
                                           placeholder="Heading text"/>
                                </div>
                                <div className="headingInputText">
                                    <select className="custom-select mr-sm-2"
                                            style={{marginRight: '0.5em'}}>
                                        <option value="Heading1" selected>Heading 1</option>
                                        <option value="Heading2">Heading 2</option>
                                        <option value="Heading3">Heading 3</option>
                                        <option value="Heading4">Heading 4</option>
                                    </select>
                                </div>
                                <div className="headingInputText">
                                    <input className="form-control" type="text"
                                           placeholder="Widget Name"/>
                                </div>
                                <div className="headingInputText"><h6>Preview</h6></div>
                                <div className="headingInputText"><h3>Heading text</h3></div>
                            </div>
                            <div className="topic-add-heading-row">
                                <button type="button" className="btn btn-danger">
                                    <span><i className="fas fa-plus"/></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="topic2" role="tabpanel"
                         aria-labelledby="profile-tab">...
                    </div>
                    <div className="tab-pane fade" id="topic3" role="tabpanel"
                         aria-labelledby="contact-tab">...
                    </div>
                    <div className="tab-pane fade" id="addTopic" role="tabpanel"
                         aria-labelledby="contact-tab">...
                    </div>
                </div>
            </div>
        </div>

    </div>

export default CourseEditor
