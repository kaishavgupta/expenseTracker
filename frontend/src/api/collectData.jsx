import { redirect } from "react-router-dom";
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
      "content-Type": "application/JSON",
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    const res_data = await response.json();
    const token = res_data.token;
    storeDataLocal(token);
  }

  return redirect("/register");
};

export const verify = async () => {
  try {
    const token = LocalToken();
    const res = await fetch("http://localhost:3000/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    return { user: data };
  } catch (error) {
    console.log("collectData ", error);
    return { user: null };
  }
};
