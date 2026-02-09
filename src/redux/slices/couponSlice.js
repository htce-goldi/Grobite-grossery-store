import { createSlice } from "@reduxjs/toolkit";

const couponSlice = createSlice({
  name: "coupon",
  initialState: {
    code: "",
    discount: 0,
  },
  reducers: {
    applyCoupon(state, action) {
      if (action.payload === "GROBITE10") {
        state.code = action.payload;
        state.discount = 10;
      }
    },
    removeCoupon(state) {
      state.code = "";
      state.discount = 0;
    },
  },
});

export const { applyCoupon, removeCoupon } = couponSlice.actions;
export default couponSlice.reducer;
