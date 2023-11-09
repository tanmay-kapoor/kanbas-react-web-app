import SimpleAPIExamples from "./SimpleAPIExamples";

function Assignment5() {
    const API_BASE = process.env.REACT_APP_API_BASE;

    return (
        <div className="container">
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href={`${API_BASE}/a5/welcome`} className="list-group-item">
                    Welcome
                </a>
            </div>
            <SimpleAPIExamples />
        </div>
    );
}
export default Assignment5;
