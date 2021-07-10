import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from '../features/darkMode/darkModeSlice'
import currencyModeReducer from '../features/currencyMode/currencyModeSlice'

export default configureStore({
    reducer: {
        mode: darkModeReducer,
        currentCurrency: currencyModeReducer,

    },
});
