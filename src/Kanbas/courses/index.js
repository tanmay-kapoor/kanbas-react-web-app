import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./styles.css";

import CourseNavigation from "./CourseNavigation.jsx";
import Home from "./Home.jsx";
import Modules from "./modules/index.js";
import Assignments from "./assignments/index.js";
import AssignmentEditor from "./assignments/AssignmentEditor.jsx";
import Grades from "./grades/index.js";

function Courses({ URL }) {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});

    const findCourseById = async (courseId) => {
        try {
            const response = await axios.get(`${URL}/${courseId}`);
            setCourse(response.data);
        } catch (err) {
            alert(err.response.data.message);
        }
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    const curPathSplit = useParams()["*"].split("/");

    return (
        <div className="main">
            <div className="row root">
                <div className="breadcrumb">
                    <i className="fa-solid fa-bars color-red"></i>
                    <nav aria-label="breadcrumb" className="ms-4">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a
                                    className="hover-underline color-red"
                                    href="."
                                >
                                    {course._id} {course.name}
                                </a>
                            </li>
                            {curPathSplit.map((path, index) => (
                                <li className="breadcrumb-item">
                                    <a
                                        className={
                                            index === curPathSplit.length - 1
                                                ? "breadcrumb-item color-black"
                                                : "hover-underline color-red"
                                        }
                                        href="."
                                    >
                                        {path}
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </div>

                <hr />

                <CourseNavigation />

                <Routes>
                    <Route path="/" element={<Navigate to="home" />} />
                    <Route path="home" element={<Home />} />
                    <Route path="modules" element={<Modules />} />
                    <Route path="assignments" element={<Assignments />} />
                    <Route
                        path="assignments/:assignmentId"
                        element={<AssignmentEditor />}
                    />
                    <Route path="grades" element={<Grades />} />
                </Routes>
            </div>
        </div>
    );
}

export default Courses;
