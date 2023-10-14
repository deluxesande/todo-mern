import { url } from "../App";

interface Props {
    setFetching: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputField = ({ setFetching }: Props) => {
    // Sending the data
    const send_to_backend = (task_name: string) => {
        const new_task = { name: task_name };
        fetch(`${url}/api/v1/tasks/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_task),
        });

        setFetching(true);
    };

    // Getting the input values
    const send_create_task = (e: React.FormEvent) => {
        e.preventDefault();
        const input_tag = document.querySelector(
            "#task-entry"
        ) as HTMLInputElement;

        const input_value = input_tag.value;

        if (input_value.length > 0) {
            // console.log("Okay you can send data");
            send_to_backend(input_value);
        } else {
            console.log("Input cannot be empty");
        }

        // Reseting the input tag
        input_tag.value = "";
    };

    return (
        <div className="input-group mb-3">
            <input
                id="task-entry"
                type="text"
                className="form-control"
                placeholder="eg. Walk dog"
            />
            <button
                className="btn btn-success"
                type="submit"
                id="button-addon2"
                onClick={send_create_task}
            >
                Add
            </button>
        </div>
    );
};

export default InputField;
