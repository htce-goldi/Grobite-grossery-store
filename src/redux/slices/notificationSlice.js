import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "",
  type: "success", 
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.type = action.payload.type || "success";
    },
    hideNotification: (state) => {
      state.open = false;
    },
  },
});

export const { showNotification, hideNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
export const notify =
  (message, type = "success") =>
  (dispatch) => {
    dispatch(showNotification({ message, type }));

    setTimeout(() => {
      dispatch(hideNotification());
    }, 2000);
  };
