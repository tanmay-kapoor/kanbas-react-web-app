import { useEffect, useState } from "react";
import * as client from "./client";
import { useParams } from "react-router";

const UserProfile = ({ user }) => {
    const { userId } = useParams();

    const [userProfile, setUserProfile] = useState(null);

    const fetchProfile = async () => {
        const profile = await client.findProfileById(userId);
        setUserProfile(profile);
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    console.log(userProfile);

    return (
        <div className="col profile-details">
            <div className="row root">
                {!userProfile ? (
                    <div
                        className="col width-100 alert alert-danger"
                        role="alert"
                    >
                        No profile found
                    </div>
                ) : (
                    <>
                        <div className="col-md-12 col-lg-2 width-auto">
                            <i
                                className="fa fa-user avatar"
                                aria-hidden="true"
                                style={{ color: "#b2b4b7" }}
                            ></i>
                        </div>
                        <div className="col-md-12 col-lg-10">
                            <h2 style={{ "font-weight": 300 }}>
                                {userProfile.firstName} {userProfile.lastName}
                            </h2>

                            <h3 className="title">username</h3>
                            <p>{userProfile.username}</p>

                            <h3 className="title">Email</h3>
                            <p>{userProfile.email}</p>

                            <h3 className="title">Date of Birth</h3>
                            <p>
                                {new Date(userProfile.dob).toLocaleDateString(
                                    "en-CA"
                                )}
                            </p>

                            <h3 className="title">User Role</h3>
                            <p>{userProfile.role}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
