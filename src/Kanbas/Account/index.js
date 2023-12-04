import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "../index.css";
import "./styles.css";
import AccountNavigation from "./AccountNavigation";
import Profile from "./profile/Profile";
import EditProfile from "./profile/EditProfile";
import { account } from "./users/client";

const Account = () => {
    const [user, setUser] = useState(null);

    const getUser = async () => {
        const loggedInUser = await account();
        console.log("loggedInUser", loggedInUser);
        setUser(loggedInUser);
        return loggedInUser;
    };

    useEffect(() => {
        const fetchData = async () => {
            await getUser();
        };

        fetchData();
    }, []);

    console.log("user", user);
    //   alert(typeof user);
    return (
        <div className="container main">
            {/* TODO: user not logged in login button, else display user info */}
            <div className="row root">
                <div className="mt-3">
                    <i
                        className="fa fa-bars bars color-red"
                        aria-hidden="true"
                    ></i>
                    {user && <h4>Profile of {user.username}'s Profile</h4>}
                </div>
                <hr className=" mt-4 mb-4" />

                <AccountNavigation />

                {/* <button onClick={getUser}>click</button> */}

                {!user || user === "" ? (
                    <div
                        className="col width-100 alert alert-danger height-100"
                        role="alert"
                    >
                        User not logged in
                        <br />
                        <a
                            className="mt-3 btn kanbas-red-btn"
                            href="/kanbas/signin"
                        >
                            Login here
                        </a>
                    </div>
                ) : (
                    <Routes>
                        {!user || user !== "" ? (
                            <>
                                <Route
                                    path="/"
                                    element={<Navigate to="profile" />}
                                />
                                <Route
                                    path="profile"
                                    element={<Profile user={user} />}
                                />
                                <Route
                                    path="edit-profile"
                                    element={<EditProfile user={user} />}
                                />
                            </>
                        ) : (
                            <div
                                className="col width-100 alert alert-danger"
                                role="alert"
                            >
                                User not logged in
                                <br />
                                <a
                                    className="mt-3 btn kanbas-red-btn"
                                    href="/kanbas/signin"
                                >
                                    Login here
                                </a>
                            </div>
                        )}
                    </Routes>
                )}
            </div>
        </div>
    );
};

export default Account;
