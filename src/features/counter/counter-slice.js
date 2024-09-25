import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
};

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers: {
        incremented(state) {
            state.value++;
        },

        amountAdded(state,action) {
            state.value += action.payload;
        },

        decrement(state,action) {
            state.value += action.payload;
        },
        decrement(state) {
            state.value--;
        },
        reset(state) {
            state.value = 0;
        },

    },
});



export const { incremented, amountAdded,decrement,reset} = counterSlice.actions;
export default counterSlice.reducer;
