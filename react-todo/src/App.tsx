import { useEffect, useState } from "react";
import "./App.css";
import EditModal from "./components/EditModal";
import InputField from "./components/InputField";
import Task from "./components/Task";

export const url = "https://todo-mern-api.vercel.app";

type Tasks = {
    readonly _id: string;
    name: string;
    completed: boolean;
    _v: number;
};

function App() {
    const [tasks, setTasks] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [editTask, setEditTask] = useState({
        _id: "",
        name: "",
        completed: false || true,
        _v: 0,
    });

    const fetchData = async () => {
        const response = await fetch(`${url}/api/v1/tasks/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        setTasks(data.tasks);
    };

    useEffect(() => {
        fetchData();
        setFetching(false);
    }, [fetching]);

    return (
        <div className="main">
            <div className="main-box">
                <InputField setFetching={setFetching} />

                {tasks.length === 0 ? (
                    <p className="lead">No Tasks available</p>
                ) : null}

                {tasks.map((task: Tasks, index) => (
                    <Task
                        key={index}
                        task={task}
                        setEditTask={setEditTask}
                        setFetching={setFetching}
                    />
                ))}
            </div>

            <EditModal task={editTask} setFetching={setFetching} />
        </div>
    );
}

export default App;
