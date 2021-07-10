import { createSlice } from "@reduxjs/toolkit";


export const currencyModeSlice = createSlice({
    name: 'currentCurrency',
    initialState: {
        value: '',
    },
    reducers: {
        changeCurrency: (state, action) => {
            state.value = action.payload;
        }
    }
})


export const { changeCurrency } = currencyModeSlice.actions;

export const selectCurrency = state => state.currentCurrency.value;

export default currencyModeSlice.reducer;