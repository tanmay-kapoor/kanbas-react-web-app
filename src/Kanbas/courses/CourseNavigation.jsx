import { Link, useLocation } from "react-router-dom";

const CourseNavigation = () => {
    const { pathname } = useLocation();

    const links = [
        { name: "Home", path: "home" },
        { name: "Modules", path: "modules" },
        { name: "Piazza", path: "piazza" },
        { name: "Zoom Meetings", path: "zoom-meetings" },
        { name: "Assignments", path: "assignments" },
        { name: "Quizes", path: "quizes" },
        { name: "Grades", path: "grades" },
        { name: "People", path: "people" },
        { name: "Panopto Video", path: "panopto-video" },
        { name: "Discussions", path: "discussions" },
        { name: "Announcements", path: "announcements" },
        { name: "Pages", path: "pages" },
        { name: "Files", path: "files" },
        { name: "Rubrics", path: "rubrics" },
        { name: "Outcomes", path: "outcomes" },
        { name: "Collaboration", path: "collaboration" },
        { name: "Syllabus", path: "syllabus" },
        { name: "Settings", path: "settings" },
    ];

    return (
        <>
            <div className="d-none d-md-block nav-2">
                <ul>
                    {links.map((link, index) => {
                        return (
                            <li
                                key={index}
                                className={
                                    pathname.includes(link.path) ? "active" : ""
                                }
                            >
                                <Link
                                    className={
                                        pathname.includes(link.path)
                                            ? ""
                                            : "color-red"
                                    }
                                    to={link.path}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default CourseNavigation;
