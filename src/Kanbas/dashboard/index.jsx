import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import CourseDetailsForm from "./CourseDetailsForm";
import FormTypes from "../utils/FormTypes";

function Dashboard({
    course,
    setCourse,
    courses,
    setCourses,
    addCourse,
    editCourse,
    deleteCourse,
    newCourseDetails,
}) {
    const [showForm, setShowForm] = useState(false);
    const [formType, setFormType] = useState(null);

    const displayForm = (e, { type, course }) => {
        e.stopPropagation();
        setCourse(course);
        setFormType(type);
        setShowForm(!showForm);
    };

    const redirect = (courseId) => {
        return () => {
            window.location.href = `courses/${courseId}`;
        };
    };

    return (
        <div>
            <div class="col-sm-12 dashboard">
                {showForm && (
                    <div className="center-align">
                        <CourseDetailsForm
                            formType={formType}
                            course={course}
                            setCourse={setCourse}
                            editCourse={editCourse}
                            addCourse={addCourse}
                            showForm={showForm}
                            setShowForm={setShowForm}
                        />
                    </div>
                )}
                <h1 className="heading">Dashboard</h1>
                <hr />

                <div className="random-div d-flex flex-row">
                    <h2 className="sub-heading mb-0 mt-0">
                        Published Courses ({courses.length})
                    </h2>
                    <button
                        className="btn btn-primary ms-auto"
                        onClick={(e) => {
                            displayForm(e, {
                                type: FormTypes.Add,
                                course: newCourseDetails,
                            });
                        }}
                    >
                        Add
                    </button>
                </div>

                <hr />

                <div className="d-flex justify-content-start flex-wrap card-container">
                    {courses.map((course, index) => {
                        return (
                            <div
                                className="card course-card pointer"
                                onClick={redirect(course._id)}
                            >
                                <img
                                    className="card-img-top"
                                    src={
                                        course.image
                                            ? require(`../../images/${course.image}`)
                                            : require("../../images/yellow.png")
                                    }
                                    alt="course-card-img"
                                />
                                <div className="m-2 pointer mb-auto">
                                    <h5 className="card-title truncate-text">{`${course.number}: ${course.name}`}</h5>
                                    <p className="card-text truncate-text">
                                        {course.description}
                                    </p>
                                </div>
                                <div className="d-flex flex-wrap pointer justify-content-start">
                                    <i
                                        className="fa fa-bullhorn footer-item"
                                        aria-hidden="true"
                                    ></i>
                                    <i className="fa-solid fa-clipboard footer-item"></i>
                                    <i
                                        className="fa-solid fa-edit footer-item color-green ms-auto"
                                        onClick={(e) => {
                                            displayForm(e, {
                                                type: FormTypes.Edit,
                                                course,
                                            });
                                        }}
                                    ></i>
                                    <i
                                        className="fa-solid fa-trash footer-item color-red"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            deleteCourse(course._id);
                                        }}
                                    ></i>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
