import { createSlice } from "@reduxjs/toolkit";
import { notify } from "../../redux/slices/notificationSlice"; 
const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    _addToCart(state, action) {
      const item = state.cartItems.find(
        (i) => i.id === action.payload.id
      );

      if (item) {
        item.qty += action.payload.qty;
      } else {
        state.cartItems.push({
          ...action.payload,
          qty: action.payload.qty,
        });
      }
    },

    increaseQty(state, action) {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );
      if (item) item.qty += 1;
    },

    decreaseQty(state, action) {
      const item = state.cartItems.find(
        (i) => i.id === action.payload
      );
      if (item) item.qty -= 1;

      state.cartItems = state.cartItems.filter((i) => i.qty > 0);
    },

    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (i) => i.id !== action.payload
      );
    },

    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  _addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export const addToCart = (product) => (dispatch) => {
  dispatch(
    _addToCart({
      ...product,
      qty: 1,
    })
  );

  dispatch(notify({ message: `${product.title} added to cart!`, type: "success" }));
};

export default cartSlice.reducer;
