import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const getTransaction = async () => {
  try {
    const dataTransaction = await api.get("transaction/getData", {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return dataTransaction.data.transaction;
  } catch (error) {
    console.log("Error While getting transaction data ", error);
  }
};

export const postTransaction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const sendData = { transaction: [data] };

  try {
    const res = await api.post("transaction/postData", sendData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log(res);
  } catch (error) {
    console.log("Error While Posting transaction data ", error);
  }
};


export const updateTransaction=async(data)=>{
    try {
        api.patch("transaction/updateData",data,{
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials:true
    })
    } catch (error) {
        console.log("Error While Updating transaction data ", error);
    }
}


export const deleteTransaction=async(_id)=>{
    try {
      return  await api.patch(`transaction/deleteData/`, { _id: _id },{
        headers:{
          "Content-Type": "application/json"
        },
        withCredentials:true
    })
    } catch (error) {
        console.log("Error While deleting transaction data ", error);
    }
}