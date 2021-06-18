import { createSlice } from "@reduxjs/toolkit";


export const darkModeSlice = createSlice({
    name: 'mode',
    initialState: {
        value: false
    },
    reducers: {
        changeMode: (state) => {
            state.value = !state.value;
        }
    }
})


export const { changeMode } = darkModeSlice.actions;

export const selectMode = state => state.mode.value;

export default darkModeSlice.reducer;