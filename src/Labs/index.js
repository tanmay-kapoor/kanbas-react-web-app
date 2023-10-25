import store from "./store";
import { Provider } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../Nav";

function Labs() {
    return (
        <Provider store={store}>
            <div>
                <Nav />
                <Routes>
                    <Route path="/" element={<Assignment3 />} />
                    <Route path="/a3" element={<Assignment3 />} />
                    <Route path="/a4" element={<Assignment4 />} />
                </Routes>
            </div>
        </Provider>
    );
}
export default Labs;
