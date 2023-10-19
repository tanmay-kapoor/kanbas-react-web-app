const EditProfile = () => {
    return (
        <div className="col profile-details">
            <a href="index.html" className="float-end">
                <button className="btn btn-light kanbas-btn-gray btn-border">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                    Cancel Editing
                </button>
            </a>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-12 col-lg-2 width-auto">
                            <i
                                className="fa fa-user avatar"
                                aria-hidden="true"
                                style={{ color: "#b2b4b7", display: "block" }}
                            ></i>
                        </div>

                        <div className="col-md-12 col-lg-10">
                            <label for="name-input" className=" fw-600">
                                Name:*
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name-input"
                                value="Tanmay Kapoor"
                            />

                            <label for="name-input" className="fw-600 mt-2">
                                Pronouns:
                            </label>
                            <select id="ass-grp" className="form-select">
                                <option>he/him</option>
                                <option>she/her</option>
                                <option>they/them</option>
                                <option selected>none</option>
                            </select>

                            <label for="title-input" className="mt-2 fw-600">
                                Title
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="title-input"
                                value="Mr."
                            />

                            <h3 className="title mt-4">Contact</h3>
                            <p>No regitered services</p>

                            <h3 className="title mt-4">Biography</h3>
                            <textarea
                                className="form-control "
                                rows="5"
                            ></textarea>

                            <h3 className="title mt-4">Links</h3>
                            <form>
                                <div className="row center-align">
                                    <div className="col tl-center fw-500">
                                        Title
                                    </div>
                                    <div className="col tl-center fw-500">
                                        URL
                                    </div>
                                </div>

                                <div className="row center-align mt-1">
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="Youtube"
                                        />
                                    </div>
                                    <div className="col-1 width-auto">
                                        <i
                                            className="fa fa-arrow-right"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="https://www.youtube.com/"
                                        />
                                    </div>
                                    <div className="col-1 width-auto color-red">
                                        <i
                                            className="fa fa-times"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </div>

                                <div className="row center-align mt-1">
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="Github"
                                        />
                                    </div>
                                    <div className="col-1 width-auto">
                                        <i
                                            className="fa fa-arrow-right"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="https://github.com/tanmay-kapoor/kanbas-react-web-app"
                                        />
                                    </div>
                                    <div className="col-1 width-auto color-red">
                                        <i
                                            className="fa fa-times"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </div>

                                <div className="row center-align mt-1">
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="LinkedIn"
                                        />
                                    </div>
                                    <div className="col-1 width-auto">
                                        <i
                                            className="fa fa-arrow-right"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            value="https://www.linkedin.com/in/tanmay-kapoor/"
                                        />
                                    </div>
                                    <div className="col-1 width-auto color-red">
                                        <i
                                            className="fa fa-times"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </div>
                                <button className="btn btn-sm bg-light btn-border mt-1">
                                    Add another link
                                </button>
                            </form>

                            <hr />
                            <div className="float-end mb-5">
                                <a href="index.html">
                                    <button
                                        type="button"
                                        className="btn btn-light btn-border"
                                    >
                                        Cancel
                                    </button>
                                </a>
                                <a href="index.html">
                                    <button
                                        type="button"
                                        className="btn btn-danger btn-border ms-2"
                                    >
                                        Save Profile
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
