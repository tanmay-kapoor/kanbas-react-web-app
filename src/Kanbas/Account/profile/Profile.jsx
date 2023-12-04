import { signout } from "../users/client";

const Profile = ({ user }) => {
    return (
        <div className="col profile-details">
            <a href="edit-profile" className="float-end">
                <button className="btn btn-light kanbas-btn-gray btn-border">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                    Edit Profile
                </button>
            </a>
            <div className="row">
                <div className="col-md-12 col-lg-2 width-auto">
                    <i
                        className="fa fa-user avatar"
                        aria-hidden="true"
                        style={{ color: "#b2b4b7" }}
                    ></i>
                </div>
                <div className="col-md-12 col-lg-10">
                    <h2 style={{ "font-weight": 300 }}>
                        {user.firstName} {user.lastName}
                    </h2>

                    <h3 className="title">username</h3>
                    <p>{user.username}</p>

                    <h3 className="title">Email</h3>
                    <p>{user.email}</p>

                    <h3 className="title">Date of Birth</h3>
                    <p>{new Date(user.dob).toLocaleDateString("en-CA")}</p>

                    <h3 className="title">User Role</h3>
                    <p>{user.role}</p>

                    <h3 className="title">Links</h3>
                    <ul>
                        <li>
                            <a
                                href="https://www.youtube.com/@WebDevTV"
                                className="link"
                            >
                                <i
                                    className="fa fa-link"
                                    style={{ color: "rgb(140, 138, 138)" }}
                                    aria-hidden="true"
                                ></i>
                                Youtube
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/tanmay-kapoor/kanbas-react-web-app"
                                className="link"
                            >
                                <i
                                    className="fa fa-link"
                                    style={{ color: "rgb(140, 138, 138)" }}
                                    aria-hidden="true"
                                ></i>
                                Github
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/tanmay-kapoor/"
                                className="link"
                            >
                                <i
                                    className="fa fa-link"
                                    style={{ color: "rgb(140, 138, 138)" }}
                                    aria-hidden="true"
                                ></i>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                    <button
                        className="btn btn-light kanbas-red-btn btn-border"
                        onClick={(e) => {
                            signout();
                            window.location.href = "/kanbas/signin";
                        }}
                    >
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
