import FormTypes from "../utils/FormTypes";

function CourseDetailsForm({
    formType,
    course,
    setCourse,
    editCourse,
    addCourse,
    showForm,
    setShowForm,
}) {
    const callFunc = (e, type) => {
        e.preventDefault();
        setCourse(course);
        if (type === FormTypes.Edit) {
            console.log("editCourse called");
            editCourse();
        } else {
            console.log("addCourse called");
            addCourse();
        }
        setShowForm(!showForm);
    };
    return (
        <>
            <form className="add-course-form">
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault01">Course Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault01"
                            placeholder="First name"
                            value={course.name}
                            required
                            onChange={(e) =>
                                setCourse({ ...course, name: e.target.value })
                            }
                        />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault02">Course Number</label>
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault02"
                            placeholder="Last name"
                            value={course.number}
                            required
                            onChange={(e) =>
                                setCourse({ ...course, number: e.target.value })
                            }
                        />
                    </div>
                </div>

                <textarea
                    rows="5"
                    className="form-control mt-3"
                    onChange={(e) =>
                        setCourse({ ...course, description: e.target.value })
                    }
                >
                    {course.description}
                </textarea>

                <div className="row mb-3">
                    <div className="col">
                        <label>Start Date</label>
                        <input
                            className="date-picker width-100"
                            type="date"
                            value={course.startDate}
                            onChange={(e) =>
                                setCourse({
                                    ...course,
                                    startDate: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="col">
                        <label>End Date</label>
                        <input
                            className="date-picker width-100"
                            type="date"
                            value={course.endDate}
                            onChange={(e) =>
                                setCourse({
                                    ...course,
                                    endDate: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>

                {formType === FormTypes.Edit ? (
                    <button
                        class="btn btn-primary"
                        type="submit"
                        onClick={(e) => callFunc(e, FormTypes.Edit)}
                    >
                        Edit Course
                    </button>
                ) : (
                    <button
                        class="btn btn-primary"
                        type="submit"
                        onClick={(e) => callFunc(e, FormTypes.Add)}
                    >
                        Add Course
                    </button>
                )}

                <button
                    class="btn btn-danger ms-3"
                    type="submit"
                    onClick={() => setShowForm(!showForm)}
                >
                    Cancel
                </button>
            </form>
        </>
    );
}

export default CourseDetailsForm;
