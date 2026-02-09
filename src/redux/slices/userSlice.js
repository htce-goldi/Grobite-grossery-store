import { createSlice } from "@reduxjs/toolkit";
import { notify } from "./notificationSlice";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logoutSuccess(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;
export default userSlice.reducer;

export const login = (userData) => (dispatch) => {
  dispatch(loginSuccess(userData));
  dispatch(notify(`Welcome ${userData.name || "User"}`));
};

export const logout = () => (dispatch) => {
  dispatch(logoutSuccess());
  dispatch(notify("Logged out successfully", "info"));
};
