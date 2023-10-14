import { useEffect, useState } from "react";
import "./App.css";
import EditModal from "./components/EditModal";
import InputField from "./components/InputField";
import Task from "./components/Task";

export const url = "http://localhost:3000";

function App() {
    type Tasks = {
        _id: string;
        name: string;
        completed: boolean;
        _v: number;
    };
    const [tasks, setTasks] = useState([]);
    const [fetching, setFetching] = useState(true);

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

                {tasks.map((task: Tasks, index) => (
                    <Task key={index} task={task} />
                ))}
            </div>

            <EditModal />
        </div>
    );
}

export default App;
