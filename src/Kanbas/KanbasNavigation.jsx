import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown.js";

function KanbasNavigation() {
    const links = [
        {
            name: "Account",
            path: "account",
            icon: "fa fa-user-circle color-gray nav-avatar",
        },
        {
            name: "Dashboard",
            path: "dashboard",
            icon: "fa fa-tachometer",
        },
        {
            name: "Courses",
            path: "courses/RS101",
            icon: "fa fa-book",
        },
        {
            name: "Inbox",
            path: "inbox",
            icon: "fa fa-inbox",
        },
        {
            name: "Calender",
            path: "calender",
            icon: "fa fa-calendar-days",
        },
        {
            name: "History",
            path: "history",
            icon: "fa-regular fa-clock",
        },
        {
            name: "Studio",
            path: "studio",
            icon: "fa-solid fa-film",
        },
        {
            name: "Commons",
            path: "commons",
            icon: "fa fa-terminal",
        },
        {
            name: "Help",
            path: "help",
            icon: "fa fa-question-circle",
        },
    ];

    const courseLinks = [
        {
            name: "Home",
            path: "account",
            icon: "fa fa-user-circle color-gray nav-avatar",
        },
        {
            name: "Modules",
            path: "dashboard",
            icon: "fa fa-tachometer",
        },
        {
            name: "Piazza",
            path: "courses",
            icon: "fa fa-book",
        },
        {
            name: "Inbox",
            path: "inbox",
            icon: "fa fa-inbox",
        },
        {
            name: "Calender",
            path: "calender",
            icon: "fa fa-calendar-days",
        },
        {
            name: "History",
            path: "history",
            icon: "fa-regular fa-clock",
        },
        {
            name: "Studio",
            path: "studio",
            icon: "fa-solid fa-film",
        },
        {
            name: "Commons",
            path: "commons",
            icon: "fa fa-terminal",
        },
        {
            name: "Help",
            path: "help",
            icon: "fa fa-question-circle",
        },
    ];

    const { pathname } = useLocation();

    return (
        <>
            <nav className="navbar navbar-light xs-nav d-md-none">
                {/* <div className="dropdown">
    <a className="btn mt-2 mb-2" href="." role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fa fa-bars color-white" aria-hidden="true"></i>
    </a>
    <a className="btn mt-2 mb-2" href="." role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fa fa-chevron-down color-white" aria-hidden="true"></i>
    </a>

    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <li>
            <a 
                class="color-red" href="../profile/index.html">
                <i class="fa fa-user-circle mr-3 color-gray" aria-hidden="true"></i>
                    Account
            </a>
        </li>
        <li>
            <a class="color-red" href="../dashboard/index.html">
                <i class="fa fa-tachometer mr-3" aria-hidden="true"></i>
                Dashboard
            </a>
        </li>
        <li>
            <a class="color-red" href="home.html">
                <i class="fa fa-book mr-3" aria-hidden="true"></i>
                    Courses
            </a>
        </li>
        <li>
            <a class="color-red" href="#">
                <i class="fa fa-inbox mr-3" aria-hidden="true"></i>
                    Inbox
            </a>
        </li>
        <li>
            <a class="color-red" href="#"><i class="fa fa-calendar-days mr-3" aria-hidden="true"></i>  Calender</a>
        </li>
        <li>
            <a class="color-red" href="#"><i class="fa-regular fa-clock mr-3"></i> History</a>
        </li>
        <li>
            <a class="color-red" href="#"><i class="fa-solid fa-film mr-3"></i> Studio</a>
        </li>
        <li>
            <a class="color-red" href="#"><i class="fa fa-terminal mr-3" aria-hidden="true"></i>Commons</a>
        </li>
        <li>
            <a class="color-red" href="#"><i class="fa fa-question-circle mr-3" aria-hidden="true"></i>  Help</a>
        </li>
    </ul>
    </div> */}

                <button
                    className="navbar-toggler color-white mt-2 mb-2"
                    data-bs-toggle="collapse"
                    data-target="#kanbas-navigation"
                >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>

                <button
                    className="navbar-toggler d-lg-none color-white pr-3"
                    data-bs-toggle="collapse"
                    data-target="secondary-navigation"
                >
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </button>

                <div
                    className="collapse navbar-collapse dropdown-navbar"
                    id="kanbas-navigation"
                >
                    <ul clss="navbar-nav" style={{ "padding-left": 0 }}>
                        {links.map((link, index) => {
                            return (
                                <li
                                    key={index}
                                    className={
                                        pathname.includes(link.path)
                                            ? "active"
                                            : ""
                                    }
                                >
                                    <Link className="color-red" to={link.path}>
                                        <i
                                            className={`${link.icon} mr-3`}
                                            aria-hidden="true"
                                        ></i>
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div
                    className="collapse navbar-collapse dropdown-navbar"
                    id="secondary-navigation"
                >
                    <ul>
                        <li>
                            <a className="color-red" href="home">
                                <i className="fa-solid fa-house"></i> Home
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-solid fa-network-wired"></i>
                                Modules
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-solid fa-plug"></i>Piazza
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-solid fa-plug"></i>Zoom
                                Meetings
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href="assignments">
                                <i className="fa-regular fa-pen-to-square"></i>
                                Assignments
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-solid fa-rocket"></i>Quizes
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href="grades">
                                <i className="fa-regular fa-address-book"></i>
                                Grades
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-solid fa-user-group"></i>People
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-solid fa-plug"></i>Panopto
                                Video
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-regular fa-comments"></i>
                                Discussions
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-solid fa-bullhorn"></i>
                                Announcements
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-regular fa-file"></i>Pages
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-regular fa-folder"></i>Files
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-solid fa-file-invoice"></i>
                                Rubrics
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-solid fa-bullseye"></i>Outcomes
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-regular fa-circle"></i>
                                Collaboration
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href=".">
                                <i className="fa-solid fa-file-lines"></i>
                                Syllabus
                            </a>
                        </li>
                        <li>
                            <a className="color-red" href="settings">
                                <i className="fa-solid fa-gear"></i>Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="sidebar d-none d-md-block">
                <ul>
                    <li>
                        <img
                            src={require("../images/neu.png")}
                            style={{ "max-width": "60px" }}
                            alt="neu-logo"
                            className="neu-logo"
                        />
                    </li>
                    {links.map((link, index) => {
                        return (
                            <li
                                className={
                                    pathname.includes(link.path) ? "active" : ""
                                }
                            >
                                <Link to={link.path}>
                                    <i
                                        className={`${link.icon} mr-3`}
                                        aria-hidden="true"
                                    ></i>
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default KanbasNavigation;
