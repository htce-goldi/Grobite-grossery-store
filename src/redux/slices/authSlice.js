import { createSlice } from "@reduxjs/toolkit";

const getStoredUser = () => {
  try {
    const data = localStorage.getItem("user");
    if (!data) return null;

    const parsed = JSON.parse(data);

    if (!parsed || !parsed.email) return null;

    return parsed;
  } catch (err) {
    console.error("Invalid user data in storage");
    return null;
  }
};

const initialState = {
  user: getStoredUser(),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    authSuccess: (state, action) => {
      state.loading = false;
      const user = {
        id: action.payload.id || Date.now(),
        name: action.payload.name || "User", 
        email: action.payload.email,
        password: action.payload.password, 
      };

      state.user = user;
      state.error = null;

      localStorage.setItem("user", JSON.stringify(user));
    },

    authFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;

      localStorage.removeItem("user");
    },
  },
});

export const {
  authStart,
  authSuccess,
  authFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
