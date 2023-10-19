import { Routes, Route, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./dashboard";
import Courses from "./courses";

import "./index.css";
import Account from "./Account";

function Kanbas() {
    return (
        <>
            <KanbasNavigation />

            <div class="container main">
                <Routes>
                    <Route path="/" element={<Navigate to="dashboard" />} />

                    <Route path="account/*" element={<Account />} />

                    <Route path="dashboard" element={<Dashboard />} />

                    <Route path="courses/:courseId/*" element={<Courses />} />
                </Routes>
            </div>
        </>
    );
}
export default Kanbas;
