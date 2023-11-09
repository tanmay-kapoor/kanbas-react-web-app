import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const API_BASE = process.env.REACT_APP_API_BASE;
    const API = `${API_BASE}/a5/todos`;
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todos, setTodos] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };

    const updateTodo = async (todo) => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }
    };

    const removeTodo = async (todo) => {
        try {
            const response = await axios.get(`${API}/${todo.id}/delete`);
            setTodos(response.data);
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }
    };

    const deleteTodo = async (todo) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }
    };

    const createTodo = async () => {
        try {
            const response = await axios.get(`${API}/create`);
            setTodos(response.data);
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }
    };

    const fetchTodoById = async (id) => {
        try {
            const response = await axios.get(`${API}/${id}`);
            setTodo(response.data);
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }
    };

    const updateTitle = async () => {
        try {
            const response = await axios.get(
                `${API}/${todo.id}/title/${todo.title}`
            );
            setTodos(response.data);
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }
    };

    const postTodo = async () => {
        try {
            const response = await axios.post(API, todo);
            setTodos([...todos, response.data]);
        } catch (err) {
            setErrorMessage(err.response.data.message);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

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
                onChange={(e) =>
                    setTodo({ ...todo, id: parseInt(e.target.value) })
                }
                type="number"
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
                onChange={(e) =>
                    setTodo({ ...todo, id: parseInt(e.target.value) })
                }
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
            <br /> <br />
            <textarea
                onChange={(e) =>
                    setTodo({ ...todo, description: e.target.value })
                }
                value={todo.description || ""}
                type="text"
                class="form-control mb-2"
                id="exampleFormControlTextarea1"
                rows="3"
            />
            <input
                onChange={(e) =>
                    setTodo({
                        ...todo,
                        due: e.target.value,
                    })
                }
                value={todo.due || ""}
                className="form-control mb-2 w-100"
                type="date"
            />
            <div className="form-check">
                <input
                    onChange={(e) =>
                        setTodo({
                            ...todo,
                            completed: e.target.checked,
                        })
                    }
                    value={todo.completed}
                    type="checkbox"
                    className="form-check-input"
                    id="completedCheckbox"
                />
                <label className="form-check-label" for="completedCheckbox">
                    Completed
                </label>
            </div>
            <br />
            <button onClick={postTodo} className="btn btn-warning mb-2 w-25">
                Post Todo
            </button>
            <br />
            <button
                onClick={() => updateTodo(todo)}
                className="btn btn-info mb-2 w-25"
            >
                Update Todo
            </button>
            <br />
            <button onClick={createTodo} className="btn btn-primary mb-2 w-25">
                Create Todo
            </button>
            <br />
            <button onClick={updateTitle} className="btn btn-success mb-2 w-25">
                Update Title
            </button>
            {errorMessage && (
                <div className="center-align alert alert-danger mb-2 mt-2 w-50">
                    {errorMessage}
                </div>
            )}
            <ul className="list-group mb-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item w-50">
                        <button
                            onClick={() => deleteTodo(todo)}
                            className="btn btn-danger float-end"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => fetchTodoById(todo.id)}
                            className="btn btn-warning me-2 float-end"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => removeTodo(todo)}
                            className="btn btn-danger me-2 float-end"
                        >
                            Remove
                        </button>
                        <input
                            checked={todo.completed}
                            type="checkbox"
                            readOnly
                        />

                        {todo.title}

                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                    </li>
                ))}
            </ul>
            <br />
            <input
                value={todo.description || ""}
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
