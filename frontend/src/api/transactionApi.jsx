import { toast } from "react-toastify";

export const getTransaction = async () => {
  try {

    const response = await fetch("http://localhost:3000/transaction/getData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:"include"
    });

    
    if (response.ok) {
      const data = await response.json();
      // console.log("getTransaction ",data);
      return data.transaction;
    }
  } catch (error) {
    console.log("Error While getting transaction data ", error);
  }
};

export const postTransaction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const sendData = { transaction: [data] };

  try {
    const response = await fetch("http://localhost:3000/transaction/postData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
      credentials:"include"
    });
    if (response.ok) {
      const res = await response.json();
      // console.log("Transaction done ", res.msg);
      return res.msg;
      // window.location.reload(true);
    }
  } catch (error) {
    console.log("Error While Posting transaction data ", error);
  }
};

export const updateTransaction = async (data) => {
  try {
    const sendData = { transaction: [data] };

    const response = await fetch(
      "http://localhost:3000/transaction/updateData",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendData),
        credentials:"include"
      }
    );
    if (response.ok) {
      const res = await response.json();
      console.log(res);
    }
  } catch (error) {
    console.log("Error While Posting transaction data ", error);
  }
};

export const deleteTransaction = async (_id) => {
  try {
    const response = await fetch(
      "http://localhost:3000/transaction/deleteData",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: _id }),
        credentials:"include"
      }
    );
    if (response.ok) {
      const res = await response.json();
      console.log(res);

      // toast(res.msg);
      return "success";
    }
  } catch (error) {
    toast.error("Unable to Delete");
    console.log("Error While deleting transaction data ", error);
  }
};
