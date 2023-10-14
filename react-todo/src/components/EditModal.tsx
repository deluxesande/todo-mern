const EditModal = () => {
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
                                    <p>Task id string</p>
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
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="completed"
                                    />
                                </div>
                            </form>
                        </div>
                        <div style={{ width: "100%", padding: "0 20px 20px" }}>
                            <button
                                type="submit"
                                style={{ width: "100%" }}
                                className="btn btn-primary"
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
