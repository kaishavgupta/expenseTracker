import { LocalToken } from "./localProvider";

const token = LocalToken();
export const getTransaction = async () => {
  try {
    const response = await fetch("http://localhost:3000/transaction/getData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data.transaction;
    }
  } catch (error) {
    console.log("Error While getting transaction data ", error);
  }
};

export const postTransaction = async ({request}) => {
    const formData = await request.formData();
  const data = Object.fromEntries(formData);
    const sendData={transaction:[data]}
  try {
    const response = await fetch("http://localhost:3000/transaction/postData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify(sendData)
    });
    if(response.ok){
        const res = await response.json()
        console.log("Transaction done ",res);
    }
  } catch (error) {
    console.log("Error While Posting transaction data ", error);
  }
};


export const updateTransaction=async(data)=>{
    try {
    const response = await fetch("http://localhost:3000/transaction/postData", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body:{
        data
      }
    });
    if(response.ok){
        const res = await response.json()
        console.log(res);
    }
  } catch (error) {
    console.log("Error While Posting transaction data ", error);
  }
}

export const deleteTransaction=async(_id)=>{
    try {
       
        
    const response = await fetch("http://localhost:3000/transaction/deleteData", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify({_id:_id})
    });
    if(response.ok){
        const res = await response.json()
        console.log(res);
    }
  } catch (error) {
    console.log("Error While deleting transaction data ", error);
  }
}