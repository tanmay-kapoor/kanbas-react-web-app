import React, { useState } from "react";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState(null);
    const [credentials, setCredentials] = useState({
        username: "rik",
        password: "12345",
    });

    const signup = async () => {
        const { status, data } = await client.signup(credentials);

        if (status === 400) {
            setError(data.message);
            return;
        }
        setError(null);
        window.location.href = "/kanbas/account";
    };

    return (
        <div className="container main">
            <div className="row root">
                <h1 className="heading">Signup</h1>
                <hr />
                {error && (
                    <div
                        className="col width-100 alert alert-danger"
                        role="alert"
                    >
                        {error}
                    </div>
                )}
                <label className="fw-600" for="username-input">
                    Username:{" "}
                </label>
                <input
                    id="username-input"
                    className="form-control mt-2"
                    value={credentials.username}
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            username: e.target.value,
                        })
                    }
                />

                <label for="password-input" className="mt-3 fw-600">
                    Password:{" "}
                </label>
                <input
                    type="password"
                    id="password-input"
                    className="form-control mt-2"
                    value={credentials.password}
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            password: e.target.value,
                        })
                    }
                />
                <button className="btn kanbas-red-btn mt-3" onClick={signup}>
                    Signup
                </button>
                <small className="mt-4">
                    Already have an account?{" "}
                    <a className="color-red" href="/kanbas/signin">
                        Signin here
                    </a>
                </small>
            </div>
        </div>
    );
}
export default Signup;
