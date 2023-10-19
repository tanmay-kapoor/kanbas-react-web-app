import { useParams } from "react-router";
import DB from "../../Database";

const AssignmentEditor = () => {
    const { assignmentId } = useParams();

    const { assignments } = DB;
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId
    );

    return (
        <div className="col edit-page">
            <div className="float-end">
                <i className="fa-solid fa-circle-check color-green"></i>
                <label className=" ms-1 color-green">Published</label>
            </div>

            <hr className="mt-5" />

            <label for="ass-name">Assignment Name</label>
            <input
                id="ass-name"
                type="text"
                className="form-control mt-1"
                value={assignment.title}
            />

            <textarea rows="5" className="form-control mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                consequuntur illo inventore recusandae dolores fuga, atque
                labore reiciendis cupiditate harum laborum, odio fugiat
                obcaecati maxime. Perferendis dolorem earum quos eos magnam
                distinctio! Explicabo dolore itaque animi, delectus sed porro
                temporibus enim ad modi corporis, mollitia corrupti doloremque
                facere eveniet tempora.
            </textarea>

            <form className="edit-ass-form ">
                <div className="form-group row">
                    <label
                        for="points"
                        className="col-sm-2 col-form-label ta-right "
                    >
                        Points
                    </label>
                    <div className="col-sm-10">
                        <input
                            id="points"
                            type="text"
                            readonly
                            className="form-control-plaintext"
                            value="100"
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label ta-right">
                        Assignment Group
                    </label>
                    <div className="col-sm-10">
                        <select id="ass-grp" className="form-select">
                            <option selected>ASSIGNMENTS</option>
                            <option value="1">QUIZ</option>
                            <option value="2">PROJECT</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        for="grade-display"
                        className="col-sm-2 col-form-label ta-right"
                    >
                        Dispplay Grade As
                    </label>
                    <div className="col-sm-10">
                        <select id="grade-display" className="form-select">
                            <option selected>PERCENTAGE</option>
                            <option value="1">POINTS</option>
                            <option value="2">PERCENTILE</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="include-in-final-grade"
                        />
                        <label
                            className="form-check-label"
                            for="include-in-final-grade"
                        >
                            Do not count this assignment towards final grade
                        </label>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label ta-right">
                        Submission Type
                    </label>
                    <div className="col-sm-10 sub-type-box">
                        <select className="form-select mb-2">
                            <option selected>Online</option>
                            <option value="1">POINTS</option>
                            <option value="2">PERCENTILE</option>
                        </select>

                        <h5>Online Entry Options</h5>

                        <div className="entry-type">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="entry-type-text-entry"
                                checked
                            />
                            <label
                                className="form-check-label"
                                for="entry-type-text-entry"
                            >
                                Text Entry
                            </label>
                        </div>

                        <div>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="entry-type-url"
                                checked
                            />
                            <label
                                className="form-check-label"
                                for="entry-type-url"
                            >
                                Website URL
                            </label>
                        </div>

                        <div>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="entry-type-rec"
                                checked
                            />
                            <label
                                className="form-check-label"
                                for="entry-type-rec"
                            >
                                Media Recordings
                            </label>
                        </div>

                        <div>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="entry-type-annotation"
                            />
                            <label
                                className="form-check-label"
                                for="entry-type-annotation"
                            >
                                Student Annotations
                            </label>
                        </div>

                        <div>
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="entry-type-upload"
                            />
                            <label
                                className="form-check-label"
                                for="entry-type-upload"
                            >
                                File Uploads
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label className="col-sm-2 col-form-label ta-right">
                        Assign
                    </label>
                    <div className="col-sm-10 sub-type-box">
                        <h5>Assign To</h5>
                        <select className="form-select mb-2">
                            <option selected>TA1</option>
                            <option value="1">TA2</option>
                            <option value="2">TA3</option>
                        </select>

                        <h5>Due</h5>
                        <input
                            className="date-picker width-100"
                            type="date"
                            value="2023-10-04"
                        />

                        <div className="row">
                            <div className="col">
                                <h5>Available From</h5>
                                <input
                                    className="date-picker width-100"
                                    type="date"
                                    value="2023-09-20"
                                />
                            </div>
                            <div className="col">
                                <h5>Until</h5>
                                <input
                                    className="date-picker width-100"
                                    type="date"
                                    value="2023-10-04"
                                />
                            </div>
                        </div>

                        <button className="mt-3 width-100 kanbas-btn-gray">
                            + Add
                        </button>
                    </div>
                </div>
            </form>

            <hr />

            <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="ass-edited-notify-users-checkbox"
            />
            <label
                className="form-check-label"
                for="ass-edited-notify-users-checkbox"
            >
                Notify users that this content has changed
            </label>
            <div className="float-end mb-5">
                <a href="../assignments">
                    <button className="btn kanbas-btn-gray">Cancel</button>
                </a>
                <a href="../assignments">
                    <button className="btn kanbas-red-btn ms-2">Save</button>
                </a>
            </div>
        </div>
    );
};

export default AssignmentEditor;
