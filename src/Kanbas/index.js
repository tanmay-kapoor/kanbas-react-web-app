import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";
import axios from "axios";

import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./dashboard";
import Courses from "./courses";
import Account from "./Account";
import store from "./store";

import "./index.css";

function Kanbas() {
    const API_BASE = process.env.REACT_APP_API_BASE;
    console.log(API_BASE);
    const URL = `${API_BASE}/api/courses`;
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const newCourseDetails = {
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
    };

    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState(newCourseDetails);

    const editCourse = async () => {
        await axios.put(`${URL}/${course._id}`, course);
        setCourses(
            courses.map((c) => (c._id === course._id ? { c, ...course } : c))
        );
    };

    const addCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([...courses, response.data]);
    };

    const deleteCourse = async (courseId) => {
        await axios.delete(`${URL}/${courseId}`);
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    return (
        <Provider store={store}>
            <div>
                <KanbasNavigation />

                <div class="container main">
                    <Routes>
                        <Route path="/" element={<Navigate to="dashboard" />} />

                        <Route path="account/*" element={<Account />} />

                        <Route
                            path="dashboard"
                            element={
                                <Dashboard
                                    course={course}
                                    setCourse={setCourse}
                                    courses={courses}
                                    setCourses={setCourses}
                                    addCourse={addCourse}
                                    editCourse={editCourse}
                                    deleteCourse={deleteCourse}
                                    newCourseDetails={newCourseDetails}
                                />
                            }
                        />

                        <Route
                            path="courses/:courseId/*"
                            element={<Courses URL={URL} />}
                        />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;
