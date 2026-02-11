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

      if (!fullName || !email || !password) {
        throw new Error("All fields are required");
      }

      const user = {
        id: Date.now(),
        name: fullName,   
        email,
        password,      
      };

      localStorage.setItem("user", JSON.stringify(user));
      dispatch(authSuccess(user));

      dispatch(
        notify({
          message: "Account created successfully ",
          type: "success",
        })
      );

      return { success: true };
    } catch (err) {
      dispatch(authFailure(err.message));
      dispatch(
        notify({
          message: err.message,
          type: "error",
        })
      );
      return { success: false };
    }
  };

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch(authStart());

      await new Promise((r) => setTimeout(r, 800));

      if (!email || !password) {
        throw new Error("Email & password required");
      }

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (!storedUser) {
        throw new Error("Please register first");
      }

      if (
        storedUser.email !== email ||
        storedUser.password !== password
      ) {
        throw new Error("Invalid email or password");
      }

      dispatch(authSuccess(storedUser));

      dispatch(
        notify({
          message: "Login successfully",
          type: "success",
        })
      );

      return { success: true };
    } catch (err) {
      dispatch(authFailure(err.message));
      dispatch(
        notify({
          message: err.message,
          type: "error",
        })
      );
      return { success: false };
    }
  };
