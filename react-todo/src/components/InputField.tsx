const InputField = () => {
    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="eg. Walk dog"
            />
            <button
                className="btn btn-success"
                type="button"
                id="button-addon2"
            >
                Add
            </button>
        </div>
    );
};

export default InputField;
