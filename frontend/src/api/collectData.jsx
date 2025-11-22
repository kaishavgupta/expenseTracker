import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

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
      credentials:"include"
    });
    if (response.ok) {
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
    credentials: 'include'
  });

  if (response.ok) {
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
    
    const res = await fetch("http://localhost:3000/user", {
      method: "GET",
      credentials:"include"
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

export const logoutUser=async()=>{
   const res=await fetch("http://localhost:3000/logout", {
    method: "GET",
    credentials: "include",
  });
  return res 
}
