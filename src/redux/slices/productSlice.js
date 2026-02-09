import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  search: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = productSlice.actions;
export default productSlice.reducer;
