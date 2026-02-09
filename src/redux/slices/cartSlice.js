import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"; 

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
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },

    decreaseQty(state, action) {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.qty -= 1;
      state.cartItems = state.cartItems.filter((i) => i.qty > 0);
    },

    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
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

export const addToCart = (product) => (dispatch, getState) => {
  const { cartItems } = getState().cart;
  const exists = cartItems.find((i) => i.id === product.id);

  dispatch(_addToCart({ ...product, qty: 1 }));

  if (exists) {
    toast.success("Quantity increased");
  } else {
    toast.success("Added to cart");
  }
};

export const removeItemFromCart = (id) => (dispatch) => {
  dispatch(removeFromCart(id));
  toast.info("Removed from cart");
};

export const increaseItemQty = (id) => (dispatch) => {
  dispatch(increaseQty(id));
  toast.success("Quantity increased");
};

export const decreaseItemQty = (id) => (dispatch, getState) => {
  dispatch(decreaseQty(id));

  const item = getState().cart.cartItems.find((i) => i.id === id);
  if (!item) {
    toast.info("Item removed from cart");
  } else {
    toast.success("Quantity decreased");
  }
};


export default cartSlice.reducer;
