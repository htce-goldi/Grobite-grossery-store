import {
  authStart,
  authSuccess,
  authFailure,
} from "../../redux/slices/authSlice"; 

import { notify } from "../../redux/slices/notificationSlice";
export const signupUser =
  ({ fullName, email, password }) =>
  async (dispatch) => {
    try {
      dispatch(authStart());

      await new Promise((r) => setTimeout(r, 800));

      if (!email || !password || !fullName) {
        throw new Error("All fields are required");
      }

      const user = {
        id: Date.now(),
        name: fullName,
        email,
      };

      localStorage.setItem("user", JSON.stringify(user));

      dispatch(authSuccess(user));
      dispatch(
        notify({
          message: "Account created successfully 🎉",
          type: "success",
        })
      );
    } catch (err) {
      dispatch(authFailure(err.message));
      dispatch(
        notify({
          message: err.message,
          type: "error",
        })
      );
    }
  };

export const loginUser =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      dispatch(authStart());

      await new Promise((r) => setTimeout(r, 800));

      if (!email || !password) {
        throw new Error("Email & password required");
      }

      const user = {
        id: Date.now(),
        name,
        email,
      };

      localStorage.setItem("user", JSON.stringify(user));

      dispatch(authSuccess(user));
      dispatch(
        notify({
          message: "Login successful ",
          type: "success",
        })
      );
    } catch (err) {
      dispatch(authFailure(err.message));
      dispatch(
        notify({
          message: err.message,
          type: "error",
        })
      );
    }
  };
