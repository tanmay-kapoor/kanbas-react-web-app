import React from "react";
import "../index.css";
import "./styles.css";
import AccountNavigation from "./AccountNavigation";
import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./profile/Profile";
import EditProfile from "./profile/EditProfile";

const Account = () => {
    return (
        <div className="container main">
            <div className="row root">
                <div className="mt-3">
                    <i
                        className="fa fa-bars bars color-red"
                        aria-hidden="true"
                    ></i>
                    <h4>Tanmay Kapoor's Profile</h4>
                </div>

                <hr className=" mt-4 mb-4" />

                <AccountNavigation />

                <Routes>
                    <Route path="/" element={<Navigate to="profile" />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="edit-profile" element={<EditProfile />} />
                </Routes>
            </div>
        </div>
    );
};

export default Account;
