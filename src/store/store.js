import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from '../features/darkMode/darkModeSlice'

export default configureStore({
    reducer: {
        mode: darkModeReducer
    },
})