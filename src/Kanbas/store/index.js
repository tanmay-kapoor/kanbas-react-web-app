import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../courses/modules/modulesReducer";

const store = configureStore({
    reducer: {
        modulesReducer,
    },
});

export default store;
