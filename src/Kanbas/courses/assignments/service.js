import axios from "axios";

const ASSIGNMENTS_URL = "http://localhost:4000/api/assignments";
const COURSES_URL = "http://localhost:4000/api/courses";

export const findAssignmentsForCourse = async (courseId) => {
    const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
};

export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

export const destroyAssignment = async (assignmentId) => {
    const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
};

export const updateAssignment = async (assignment) => {
    const response = await axios.put(
        `${ASSIGNMENTS_URL}/${assignment._id}`,
        assignment
    );
    return response.data;
};
