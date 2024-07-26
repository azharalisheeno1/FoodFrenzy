import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    Increment:(state,action)=>{
      state.cart=state.cart.map((item)=> item.id === action.payload.id ? {...item,qty:item.qty + 1} : item);
      
    },
    Decrement:(state,action)=>{
      state.cart=state.cart.map((item)=> item.id === action.payload.id ? {...item,qty:item.qty - 1} : item);
      
    },
  },
});

export const { addToCart, removeFromCart ,Increment,Decrement } = CartSlice.actions;
export default CartSlice.reducer;
