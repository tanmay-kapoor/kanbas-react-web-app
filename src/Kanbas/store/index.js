import { configureStore } from "@reduxjs/toolkit";
import moduleReducer from "../courses/modules/moduleReducer";

const store = configureStore({
    reducer: {
        moduleReducer,
    },
});

export default store;
