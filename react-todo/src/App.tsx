import "./App.css";
import EditModal from "./components/EditModal";
import InputField from "./components/InputField";
import Task from "./components/Task";

function App() {
    const tasks = [
        {
            id: "1",
            name: "Dune",
            completed: "false",
        },
        {
            id: "2",
            name: "Foundation",
            completed: "false",
        },
        {
            id: "3",
            name: "1984",
            completed: "false",
        },
        {
            id: "4",
            name: "Brave New World",
            completed: "false",
        },
        {
            id: "5",
            name: "Fahrenheit 451",
            completed: "false",
        },
        {
            id: "6",
            name: "Neuromancer",
            completed: "false",
        },
        {
            id: "7",
            name: "The Hitchhiker's Guide to the Galaxy",
            completed: "false",
        },
        {
            id: "8",
            name: "Ender's Game",
            completed: "false",
        },
        {
            id: "9",
            name: "The Martian",
            completed: "false",
        },
        {
            id: "10",
            name: "Snow Crash",
            completed: "false",
        },
    ];

    type Tasks = {
        id: string;
        name: string;
        completed: string;
    };

    return (
        <div className="main">
            <div className="main-box">
                <InputField />

                {tasks.map((task: Tasks, index) => (
                    <Task key={index} task={task} />
                ))}
            </div>

            <EditModal />
        </div>
    );
}

export default App;
