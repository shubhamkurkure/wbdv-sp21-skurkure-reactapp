import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <div>
        <h1>Landing Page</h1>
        <div className="list-group">
            <ul>
            <li><Link to="/courses/table">
                Courses Table
            </Link></li>
            <li><Link to="/courses/grid">
                Courses Grid
            </Link></li>
            <li><Link to="/courses/editor">
                Course Editor
            </Link></li>
            </ul>
        </div>
    </div>
