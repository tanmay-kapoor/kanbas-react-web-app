import { useParams } from "react-router";
import DB from "../../Database";
import "./styles.css";

const Grades = () => {
    const { courseId } = useParams();
    const assignments = DB.assignments.filter(
        (assignment) => assignment.course === courseId
    );
    const enrollments = DB.enrollments.filter(
        (enrollment) => enrollment.course === courseId
    );

    return (
        <div className="col width-auto">
            <div className="float-end">
                <button className="btn kanbas-btn-gray">
                    <i className="fa-solid fa-file-import"></i> Import
                </button>
                <button className="btn kanbas-btn-gray ms-2">
                    <i className="fa-solid fa-file-export"></i> Export
                </button>
                <button className="btn kanbas-btn-gray ms-2">
                    <i className="fa-solid fa-gear color-black"></i>
                </button>
            </div>

            <hr className="mt-5" />

            <form className="mb-3">
                <div className="row center-align">
                    <div className="col fw-600">Student Names</div>
                    <div className="col fw-600">Assignment Names</div>
                </div>

                <div className="row center-align mt-1">
                    <div className="col">
                        <div className="dropdown">
                            <select
                                id="ass-grp"
                                className="form-select color-gray"
                            >
                                <option selected>🔍 Search Students</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="dropdown">
                            <select
                                id="ass-grp"
                                className="form-select color-gray"
                            >
                                <option selected value="fa-magnifying-glass">
                                    🔍 Search Assignments
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <button className="btn kanbas-btn-gray mt-2">
                    <i className="fa fa-filter" aria-hidden="true"></i> Filter
                </button>
            </form>

            {assignments.length === 0 ? (
                <div className="col width-100 alert alert-danger" role="alert">
                    No grades available
                </div>
            ) : (
                <table className="grades-table -2">
                    <thead>
                        <tr>
                            <th className="student-name fw-600">
                                Student Name
                            </th>
                            {assignments.map((assignment) => (
                                <th>
                                    {assignment.title} <br />
                                    Out of 100
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = DB.users.find(
                                (user) => user._id === enrollment.user
                            );
                            return (
                                <tr>
                                    <td
                                        valign="top"
                                        className="student-name color-red"
                                    >
                                        {user.firstName} {user.lastName}
                                    </td>
                                    {assignments.map((assignment) => {
                                        const grade = DB.grades.find(
                                            (grade) =>
                                                grade.student === user._id &&
                                                grade.assignment ===
                                                    assignment._id
                                        );
                                        return (
                                            <td valign="top">
                                                {grade?.grade || "-"}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Grades;
