import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();
    const signin = async () => {
        const user = await client.signin(credentials);

        if (user === undefined) {
            alert("Invalid credentials");
            return;
        }

        navigate("/kanbas/account");
    };
    return (
        <div className="container main">
            <div className="row root">
                <h1 className="heading">Signin</h1>
                <hr />

                <label className="fw-600" for="username-input">
                    Username:{" "}
                </label>
                <input
                    id="username-input"
                    className="form-control"
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
                    id="password-input"
                    className="form-control mt-2"
                    type="password"
                    value={credentials.password}
                    onChange={(e) =>
                        setCredentials({
                            ...credentials,
                            password: e.target.value,
                        })
                    }
                />
                <button className="btn kanbas-red-btn mt-3" onClick={signin}>
                    Signin
                </button>

                <small className="mt-4">
                    Don't have an account?{" "}
                    <a className="color-red" href="/kanbas/signup">
                        Signup here
                    </a>
                </small>
            </div>
        </div>
    );
}
export default Signin;
