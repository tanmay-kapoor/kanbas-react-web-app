import { Provider } from "react-redux";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router";

import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./dashboard";
import Courses from "./courses";
import Account from "./Account";
import db from "./Database";
import store from "./store";

import "./index.css";

function Kanbas() {
    const newCourseDetails = {
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
    };

    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState(newCourseDetails);

    const editCourse = () => {
        console.log("inside editCourse");
        setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    };

    const addCourse = () => {
        setCourses([
            ...courses,
            { ...course, _id: new Date().getTime().toString() },
        ]);
    };

    const deleteCourse = (courseId) => {
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
                            element={<Courses courses={courses} />}
                        />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;
