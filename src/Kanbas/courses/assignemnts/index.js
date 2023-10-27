import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database/index";

import "./styles.css";
import AssignmentEditor from "./AssignmentEditor";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;

    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    return courseAssignments.length === 0 ? (
        <div
            className="col width-100 alert alert-danger height-100"
            role="alert"
        >
            No assignments created
        </div>
    ) : (
        <div class="col width-100">
            <div class="row">
                <div class="col">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search For Assignments"
                    />
                </div>
                <div class="col">
                    <div class="float-end">
                        <button class="btn kanbas-btn-gray">+ Group</button>
                        <button class="btn kanbas-red-btn mt-1 ms-2">
                            + Assignment
                        </button>
                    </div>
                </div>
            </div>

            <hr class="mt-3" />

            <ul class="list-group assignments">
                <li class="list-group-item list-group-item-secondary">
                    Assignments
                    <i
                        class="fa fa-ellipsis-v float-end ms-4 color-gray"
                        aria-hidden="true"
                    ></i>
                    <i class="fa fa-plus float-end ms-3" aria-hidden="true"></i>
                    <label class="custom-label float-end">40% of Total</label>
                </li>

                {courseAssignments.map((assignment) => {
                    return (
                        <li class="list-group-item sub-heading">
                            <div class="d-flex ass-box align-items-center">
                                <i class="fa-solid fa-grip-vertical color-gray"></i>
                                <i class="fa-regular fa-pen-to-square color-gray ms-3"></i>
                                <div class="ass-description ms-3">
                                    <Link
                                        to={assignment._id}
                                        element={<AssignmentEditor />}
                                    >
                                        {assignment.title}
                                    </Link>
                                    <p>
                                        <strong>Due</strong> Sep 18 at 11:59pm |
                                        -/100 pts
                                    </p>
                                </div>
                                <i
                                    class="fa fa-check-circle ms-auto color-green"
                                    aria-hidden="true"
                                ></i>
                                <i
                                    class="fa fa-ellipsis-v float-end ms-4  color-gray"
                                    aria-hidden="true"
                                ></i>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Assignments;
