// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // 確保這裡的邏輯正確
      return state.filter(item => item.id !== action.payload); 
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
