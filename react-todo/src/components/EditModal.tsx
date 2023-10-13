const EditModal = () => {
    return (
        <>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@getbootstrap"
            >
                Open modal for @getbootstrap
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                New message
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="col-form-label">
                                        Recipient:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="col-form-label">
                                        Message:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="recipient-name"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Send message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditModal;
