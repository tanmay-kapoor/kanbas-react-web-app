import React, { useState } from "react";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <br />
            <a href={API} className="btn btn-primary mb-2 w-25">
                Get Todos
            </a>
            <br />

            <h4>Retrieving an Item from an Array by ID</h4>
            <br />
            <input
                className="form-control mb-2 w-75"
                value={todo.id}
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <a href={`${API}/${todo.id}`} className="btn btn-primary mb-2 w-25">
                Get Todo by ID
            </a>

            <h3>Filtering Array Items</h3>
            <a
                href={`${API}/?completed=true`}
                className="btn btn-primary mb-2 w-25"
            >
                Get Completed Todos
            </a>

            <h3>Creating new Items in an Array</h3>
            <a href={`${API}/create`} className="btn btn-primary mb-2 w-25">
                Create Todo
            </a>

            <h3>Deleting from an Array</h3>
            <input
                value={todo.id}
                onChange={(e) => setTodo({ ...todo, id: e.target.value })}
                className="form-control mb-2"
                type="number"
            />
            <a
                href={`${API}/${todo.id}/delete`}
                className="btn btn-primary mb-2 w-25"
            >
                Delete Todo with ID = {todo.id}
            </a>

            <h3>Updating an Item in an Array</h3>
            <input
                value={todo.title}
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        title: e.target.value,
                    })
                }
                className="form-control mb-2"
                type="text"
            />
            <a
                href={`${API}/${todo.id}/title/${todo.title}`}
                className="btn btn-primary mb-2 w-25"
            >
                Update Title to <br /> {todo.title}
            </a>

            <input
                value={todo.description}
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        description: e.target.value,
                    })
                }
                className="form-control mb-2"
                type="text"
            />
            <a
                href={`${API}/${todo.id}/description/${todo.description}`}
                className="btn btn-primary mb-2 w-25"
            >
                Update Description to <br /> {todo.description}
            </a>

            <div className="form-check">
                <input
                    checked={todo.completed}
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            completed: e.target.checked,
                        })
                    }
                    className="form-check-input"
                    type="checkbox"
                />
                <label className="form-check-label">Completed</label>
                <br />
            </div>
            <a
                href={`${API}/${todo.id}/completed/${todo.completed}`}
                className="btn btn-primary mb-2 w-25"
            >
                Update Completed to {todo.completed.toString()}
            </a>
        </div>
    );
}

export default WorkingWithArrays;
