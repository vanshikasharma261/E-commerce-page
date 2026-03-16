import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state) => {
            state.value += 1
        },
        removeItem: (state) => {
            state.value > 0 ? state.value -= 1 : null
        },
        clearAllItems: (state) => {
            state.value = 0;
        }
    }
});

export const { addItem, removeItem, clearAllItems } = cartSlice.actions;
export default cartSlice.reducer;