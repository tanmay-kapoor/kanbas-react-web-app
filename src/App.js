// import "./App.css";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Add from "./Labs/a3/Add";

function App() {
    return (
        // <HashRouter></HashRouter>
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/Labs/" />} />
                    <Route path="/hello" element={<HelloWorld />} />
                    <Route path="/Labs/*" element={<Labs />} />
                    <Route path="/Kanbas/*" element={<Kanbas />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
