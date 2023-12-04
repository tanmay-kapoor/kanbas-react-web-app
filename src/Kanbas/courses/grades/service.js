import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE_URL;

export const findEnrollmentsForCourse = async (courseId) => {
    const response = await axios.get(
        `${API_BASE}/api/courses/${courseId}/enrollments`
    );
    return response.data;
};

export const findUserById = async (userId) => {
    const response = await axios.get(`${API_BASE}/api/users/${userId}`);
    return response.data;
};

export const findGradeForAssignmentAndUser = async (assignmentId, userId) => {
    const response = await axios.get(
        `${API_BASE}/api/grades/${assignmentId}/${userId}`
    );
    return response.data;
};
