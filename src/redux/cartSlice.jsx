import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id != action.payload.id);
    },
    increamentCart(state, action) {
      state = state.map(item => {
        if (item.id == action.payload.id) {
            item.quantityToAdd++;
        }
        return item;
    });
    },
    decreamentCart(state, action) {
      state = state.map(item => {
        if (item.quantityToAdd !== 1) {
            if (item.id == action.payload.id) {
                item.quantityToAdd--;
            }
        }
        return item;
    })
    },
  },
});

export const { addToCart, removeFromCart, increamentCart, decreamentCart } = cartSlice.actions;
export default cartSlice.reducer;
