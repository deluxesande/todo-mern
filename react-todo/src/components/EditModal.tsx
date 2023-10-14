import { useEffect, useState } from "react";
import { url } from "../App";

type Task = {
    readonly _id: string;
    name: string;
    completed: boolean;
    _v: number;
};
interface Props {
    task: Task;
    setFetching: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModal = ({ task, setFetching }: Props) => {
    const [checkValue, setCheckedValue] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedValue(e.target.checked);
    };

    const handleSubmit = () => {
        const new_name = document.querySelector(
            "#task-name"
        ) as HTMLInputElement;
        const new_name_value = new_name.value;

        const new_task = {
            name: new_name_value,
            completed: checkValue,
        };

        fetch(`${url}/api/v1/tasks/${task._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_task),
        });

        setFetching(true);
    };

    useEffect(() => {
        setCheckedValue(task.completed);
    }, [task.completed]);

    return (
        <>
            <div
                className="modal fade"
                id="editModal"
                aria-labelledby="editTask"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div
                            style={{
                                width: "100%",
                                textAlign: "center",
                                padding: "20px 0",
                            }}
                        >
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                                style={{
                                    textTransform: "uppercase",
                                    fontWeight: "bold",
                                }}
                            >
                                Edit Task
                            </h1>

                            {/* Removed close button but left code just incase */}
                            <button
                                type="button"
                                className="btn-close btn-sm"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                style={{
                                    position: "absolute",
                                    top: "20px",
                                    right: "20px",
                                    fontSize: "14px",
                                }}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="myform-group mb-3">
                                    <label
                                        htmlFor="task-name"
                                        className="col-form-label"
                                    >
                                        Task ID:
                                    </label>
                                    <p>{task._id}</p>
                                </div>
                                <div className="myform-group mb-3">
                                    <label
                                        htmlFor="task-name"
                                        className="col-form-label"
                                    >
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="task-name"
                                        defaultValue={task.name}
                                    />
                                </div>
                                <div className="myform-group mb-3">
                                    <label
                                        htmlFor="completed"
                                        className="col-form-label"
                                    >
                                        Completed:
                                    </label>
                                    <input
                                        type="checkbox"
                                        id="completed"
                                        style={{
                                            width: "17px",
                                            height: "17px",
                                        }}
                                        checked={checkValue}
                                        onChange={handleChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div style={{ width: "100%", padding: "0 20px 20px" }}>
                            <button
                                type="submit"
                                data-bs-dismiss="modal"
                                style={{ width: "100%" }}
                                className="btn btn-primary"
                                onClick={handleSubmit}
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditModal;
