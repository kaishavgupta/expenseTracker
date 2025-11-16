import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { LocalToken, storeDataLocal } from "./localProvider";
// import { use } from "react";

export const registerData = async ({ request }) => {
  try {
    const data = await request.formData();
    const formData = Object.fromEntries(data);

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const res_data = await response.json();
      const token = res_data.token;
      storeDataLocal(token);
      toast("Register Successfull");
      return redirect("/index");
    } else {
      const res_data = await response.json();
      console.log(res_data.extraDetails, res_data.message);
      toast.warn(`${res_data.extraDetails} ${res_data.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginData = async ({ request }) => {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  const response = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    const res_data = await response.json();
    const token = res_data.token;
    storeDataLocal(token);
    toast("login sucesfull");
    return redirect("/index");
  } else {
    //  localStorage.removeItem("token");
    const res_data = await response.json();
    if (res_data.message !== "User Doesn't Exists") {
      toast.warn(res_data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("User Doesnt Exist", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
};

export const verify = async () => {
  try {
    const token = LocalToken();
    if (!token)return {user: null,};
    
    const res = await fetch("http://localhost:3000/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    // console.log(data);

    return {
      user: {
        userData: data.userData,
      },
    };
  } catch (error) {
    console.log("collectData verify", error);
    return { user: null };
  }
};
