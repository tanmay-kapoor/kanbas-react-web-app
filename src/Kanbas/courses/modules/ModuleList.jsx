import { useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { deleteModule, setModule } from "./moduleReducer";
import ModuleDetailsForm from "./ModuleDetailsForm";
import FormTypes from "../../utils/FormTypes";

const ModuleList = () => {
    const { courseId } = useParams();

    const newModuleDetails = {
        name: "New Module",
        description: "New Description",
        course: courseId,
    };

    const [showForm, setShowForm] = useState(false);
    const [formType, setFormType] = useState(null);

    const modules = useSelector((state) => state.moduleReducer.modules);
    const dispatch = useDispatch();

    modules.map((m) =>
        m.course !== courseId ? dispatch(deleteModule(m._id)) : m
    );

    const displayForm = (e, { type, module }) => {
        e.preventDefault();
        dispatch(setModule(module));
        setShowForm(!showForm);
        setFormType(type);
    };

    return (
        <div className="col-xs-12 col-md-8">
            {showForm && (
                <div className="center-align">
                    <ModuleDetailsForm
                        showForm={showForm}
                        setShowForm={setShowForm}
                        formType={formType}
                        courseId={courseId}
                    />
                </div>
            )}
            <div className="button-bar">
                <button className="btn kanbas-btn-gray">Collapse All</button>
                <button className="btn kanbas-btn-gray ms-2">
                    View Progress
                </button>
                <select className="form-select color-gray inline width-auto ms-2">
                    <option selected>Publish All</option>
                </select>
                <button
                    className="btn kanbas-red-btn ms-2"
                    onClick={(e) => {
                        dispatch(setModule(newModuleDetails));
                        displayForm(e, {
                            type: FormTypes.Add,
                            module: newModuleDetails,
                        });
                    }}
                >
                    + Module
                </button>
            </div>

            <hr className="mt-2 mb-2" />

            {modules.length === 0 ? (
                <div
                    className="center-align col alert alert-danger"
                    role="alert"
                >
                    No modules published for this course
                </div>
            ) : (
                modules.map((module, index) => {
                    return (
                        <ul key={index} className="list-group new-module">
                            <li className="list-group-item list-group-item-secondary">
                                <div className="d-flex flex-row">
                                    <div>
                                        {module.name} - {module.description}
                                    </div>
                                    <div className="d-flex flex-row ms-auto">
                                        <i
                                            className="fa fa-check-circle float-end color-green"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            className="fa fa-caret-down float-end ms-1"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            className="fa fa-plus float-end ms-2"
                                            aria-hidden="true"
                                        ></i>
                                        <i
                                            className="fa-solid fa-edit footer-item color-green ms-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                displayForm(e, {
                                                    type: FormTypes.Edit,
                                                    module,
                                                });
                                            }}
                                        ></i>
                                        <i
                                            className="fa-solid fa-trash footer-item color-red ms-2"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                dispatch(
                                                    deleteModule(module._id)
                                                );
                                            }}
                                        ></i>
                                        <i
                                            className="fa fa-ellipsis-v float-end color-gray ms-2"
                                            aria-hidden="true"
                                        ></i>
                                    </div>
                                </div>
                            </li>

                            {module.contents &&
                                module.contents.map((content) => {
                                    if (
                                        !content.topics ||
                                        !content.topics.length
                                    ) {
                                        return <></>;
                                    }

                                    return (
                                        <>
                                            <li className="list-group-item sub-heading">
                                                {content.heading}
                                                <i
                                                    className="fa fa-ellipsis-v float-end ms-4 color-gray"
                                                    aria-hidden="true"
                                                ></i>
                                                <i
                                                    className="fa fa-check-circle float-end color-green"
                                                    aria-hidden="true"
                                                ></i>
                                            </li>

                                            {content.topics &&
                                                content.topics.map((topic) => {
                                                    if (topic.link) {
                                                        return (
                                                            <li className="list-group-item">
                                                                <a
                                                                    href={
                                                                        topic.link
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="link color-red"
                                                                >
                                                                    <i
                                                                        className="fa fa-link"
                                                                        style={{
                                                                            color: "rgb(140, 138, 138)",
                                                                        }}
                                                                        aria-hidden="true"
                                                                    ></i>
                                                                    {topic.name}
                                                                    <i
                                                                        className="fa fa-ellipsis-v float-end ms-4 color-gray"
                                                                        aria-hidden="true"
                                                                    ></i>
                                                                    <i
                                                                        className="fa fa-check-circle float-end color-green"
                                                                        aria-hidden="true"
                                                                    ></i>
                                                                </a>
                                                            </li>
                                                        );
                                                    } else {
                                                        return (
                                                            <li className="list-group-item">
                                                                {topic.name}
                                                                <i
                                                                    className="fa fa-ellipsis-v float-end ms-4 color-gray"
                                                                    aria-hidden="true"
                                                                ></i>
                                                                <i
                                                                    className="fa fa-check-circle float-end color-green"
                                                                    aria-hidden="true"
                                                                ></i>
                                                            </li>
                                                        );
                                                    }
                                                })}
                                        </>
                                    );
                                })}
                        </ul>
                    );
                })
            )}
        </div>
    );
};

export default ModuleList;
