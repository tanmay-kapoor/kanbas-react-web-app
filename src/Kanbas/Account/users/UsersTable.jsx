import React, { useState, useEffect } from "react";
import * as client from "./client";
import { Link } from "react-router-dom";

// TODO: edit/creating new user with existing username
// TODO: signe din user can delete themselves?

function UsersTable() {
    const [users, setUsers] = useState(null);
    const [user, setUser] = useState({
        username: "",
        password: "",
        role: "USER",
    });

    const sameUsernamesCreate = () => {
        let count = 0;
        users.forEach((u) => {
            if (u.username === user.username) {
                count++;
            }
        });
        console.log(count);
        return count;
    };

    const sameUsernamesUpdate = () => {
        let count = 0;
        users.forEach((u) => {
            if (u._id !== user._id && u.username === user.username) {
                count++;
            }
        });
        console.log(count);
        return count;
    };

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };

    const createUser = async () => {
        try {
            if (user.username === "" || user.password === "") {
                alert("Username and password are required");
                return;
            }
            if (sameUsernamesCreate() > 0) {
                alert("Username already exists");
                return;
            }

            const u = await client.createUser(user);
            setUsers([u, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const selectUser = async (user) => {
        window.scrollTo(0, 0);
        const u = await client.findUserById(user._id);
        setUser(u);
    };

    const updateUser = async () => {
        try {
            if (sameUsernamesUpdate() > 0) {
                alert("Username already exists");
                return;
            }
            const ack = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    };

    const deleteUser = async (user) => {
        await client.deleteUser(user);
        setUsers(users.filter((u) => u._id !== user._id));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    //   console.log(users);

    return (
        <div className="container">
            <div className="root">
                {users === null ? (
                    <div
                        className="col width-100 alert alert-danger"
                        role="alert"
                    >
                        Please{" "}
                        <a className="text-red" href="/signin">
                            signin here
                        </a>{" "}
                        to access user list
                    </div>
                ) : (
                    <>
                        <h1 className="heading">User List</h1>
                        <hr />
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Username</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>D.O.B</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input
                                            className="form-control"
                                            placeholder="Username *"
                                            value={user.username}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    username: e.target.value,
                                                })
                                            }
                                        />
                                        <input
                                            className="form-control"
                                            type="password"
                                            value={user.password}
                                            placeholder="Password *"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    password: e.target.value,
                                                })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="form-control"
                                            value={user.firstName}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    firstName: e.target.value,
                                                })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="form-control"
                                            value={user.lastName}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    lastName: e.target.value,
                                                })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className="form-control"
                                            type="email"
                                            value={user.email}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    email: e.target.value,
                                                })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <select
                                            className="form-control"
                                            value={user.role}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    role: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="USER">User</option>
                                            <option value="ADMIN">Admin</option>
                                            <option value="FACULTY">
                                                Faculty
                                            </option>
                                            <option value="STUDENT">
                                                Student
                                            </option>
                                            <option value="INSTRUCTOR">
                                                INSTRUCTOR
                                            </option>
                                        </select>
                                    </td>

                                    <td>
                                        <input
                                            className="form-control"
                                            type="date"
                                            value={new Date(
                                                user.dob
                                            ).toLocaleDateString("en-CA")}
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    dob: e.target.value,
                                                })
                                            }
                                        />
                                    </td>
                                    <td>
                                        <button
                                            className="btn kanbas-blue-btn"
                                            onClick={createUser}
                                        >
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                        <button
                                            className="btn kanbas-green-btn"
                                            onClick={updateUser}
                                        >
                                            <i class="fa-solid fa-circle-check"></i>
                                        </button>
                                    </td>
                                </tr>

                                {!users || users.length === 0 ? (
                                    <div
                                        className="mt-3 col width-100 alert alert-danger"
                                        role="alert"
                                    >
                                        No users found. Please add some users
                                    </div>
                                ) : (
                                    users.map((user) => (
                                        <tr key={user._id}>
                                            <td>
                                                <Link
                                                    className="color-red pointer"
                                                    to={`/kanbas/user/${user._id}`}
                                                >
                                                    {user.username}
                                                </Link>
                                            </td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                {new Date(
                                                    user.dob
                                                ).toLocaleDateString("en-CA")}
                                            </td>
                                            <td>
                                                <button
                                                    className="btn kanbas-yellow-btn"
                                                    onClick={() =>
                                                        selectUser(user)
                                                    }
                                                >
                                                    <i className="fas fa-pen"></i>
                                                </button>
                                                <button
                                                    className="btn kanbas-red-btn"
                                                    onClick={() =>
                                                        deleteUser(user)
                                                    }
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </>
                )}
            </div>
        </div>
    );
}
export default UsersTable;
