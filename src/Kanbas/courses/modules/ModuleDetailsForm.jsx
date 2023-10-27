import { useSelector, useDispatch } from "react-redux";

import { addModule, editModule, setModule } from "./moduleReducer";
import FormTypes from "../../utils/FormTypes";

function ModuleDetailsForm({ showForm, setShowForm, formType, courseId }) {
    const module = useSelector((state) => state.moduleReducer.module);
    const dispatch = useDispatch();

    const callFunc = (e, type) => {
        e.preventDefault();
        if (type === FormTypes.Add) {
            dispatch(addModule({ ...module, course: courseId }));
        } else if (type === FormTypes.Edit) {
            dispatch(editModule(module));
        }
        setShowForm(!showForm);
    };

    return (
        <>
            <form className="add-course-form">
                <div class="form-row">
                    <div class="col-md-4 mb-3">
                        <label for="validationDefault01">Module Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="validationDefault01"
                            placeholder="First name"
                            value={module.name}
                            required
                            onChange={(e) => {
                                dispatch(
                                    setModule({
                                        ...module,
                                        name: e.target.value,
                                    })
                                );
                            }}
                        />
                    </div>
                </div>
                <textarea
                    rows="5"
                    className="form-control mt-3"
                    onChange={(e) => {
                        dispatch(
                            setModule({
                                ...module,
                                description: e.target.value,
                            })
                        );
                    }}
                >
                    {module.description}
                </textarea>

                {formType === FormTypes.Edit ? (
                    <button
                        class="btn btn-primary mt-3"
                        type="submit"
                        onClick={(e) => {
                            callFunc(e, FormTypes.Edit);
                        }}
                    >
                        Edit Module
                    </button>
                ) : (
                    <button
                        class="btn btn-primary mt-3"
                        type="submit"
                        onClick={(e) => {
                            callFunc(e, FormTypes.Add);
                        }}
                    >
                        Add Module
                    </button>
                )}
                <button
                    class="btn btn-danger ms-3 mt-3"
                    type="submit"
                    onClick={() => {
                        setShowForm(!showForm);
                    }}
                >
                    Cancel
                </button>
            </form>
        </>
    );
}

export default ModuleDetailsForm;
