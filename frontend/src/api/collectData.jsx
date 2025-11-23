import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

// base axios config
const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

// REGISTER
export const registerData = async ({ request }) => {
  try {
    const data = await request.formData();
    const formData = Object.fromEntries(data);

    const response = await api.post("/register", formData);

    toast("Register Successful");
    return redirect("/index");
  } catch (error) {

    const res = error.response?.data;

    toast.warn(`${res?.extraDetails || ""} ${res?.message || ""}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }
};

// LOGIN
export const loginData = async ({ request }) => {
  try {
    const data = await request.formData();
    const formData = Object.fromEntries(data);

    const response = await api.post("/login", formData);

    toast("Login Successful");
    return redirect("/index");
  } catch (error) {
    const res = error.response?.data;

    if (res?.message !== "User Doesn't Exists") {
      toast.warn(res?.message || "Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    } else {
      toast.error("User Doesn't Exist", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  }
};

// VERIFY USER
export const verify = async () => {
  try {
    const res = await api.get("/user");

    return {
      user: {
        userData: res.data.userData,
      },
    };
  } catch (error) {
    console.log("// error while verifying user", error);
    return { user: null };
  }
};

// LOGOUT
export const logoutUser = async () => {
  try {
    const res = await api.get("/logout");
    return res;
  } catch (error) {
    console.log("// error while logout", error);
  }
};