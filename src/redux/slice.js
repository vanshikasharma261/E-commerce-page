import js from "@eslint/js";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const exists = state.items.find(i => i.id == action.payload.id)
            if (exists) {
                exists.quantity += 1
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 })
            }

            localStorage.setItem('cart', JSON.stringify(state.items));
            // console.log("New Cart after adding is: ", state.items);
        },
        removeItem: (state, action) => {
            const item = state.items.find((item) => item.id == action.payload.id);
            if (item.quantity > 1) {
                item.quantity -= 1;
            }
            else {
                state.items = state.items.filter((cartItem) => cartItem.id != action.payload.id)
            }
            localStorage.setItem('cart', JSON.stringify(state.items));
            // console.log("New cart after removinf is: ", state.items);
        },
        clearAllItems: (state) => {
            state.items = []
            localStorage.setItem('cart', JSON.stringify(state.items));
        }
    }
});

export const { addItem, removeItem, clearAllItems } = cartSlice.actions;
export default cartSlice.reducer;