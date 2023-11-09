import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modules: [],
    module: { name: "New Module", description: "New Description" },
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModules: (state, action) => {
            state.modules = action.payload;
        },
        addModule: (state, action) => {
            state.modules = [...state.modules, action.payload];
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module._id !== action.payload
            );
        },
        editModule: (state, action) => {
            state.modules = state.modules.map((module) => {
                if (module._id === action.payload._id) {
                    return action.payload;
                } else {
                    return module;
                }
            });
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },
    },
});

export const { setModules, addModule, deleteModule, editModule, setModule } =
    modulesSlice.actions;
export default modulesSlice.reducer;
