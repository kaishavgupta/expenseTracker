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



//collectdata.jsx 
// import { redirect } from "react-router-dom";
// import { toast } from "react-toastify";

// // import { use } from "react";

// export const registerData = async ({ request }) => {
//   try {
//     const data = await request.formData();
//     const formData = Object.fromEntries(data);

//     const response = await fetch("http://localhost:3000/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//       credentials:"include"
//     });
//     if (response.ok) {
//       toast("Register Successfull");
//       return redirect("/index");
//     } else {
//       const res_data = await response.json();
//       console.log(res_data.extraDetails, res_data.message);
//       toast.warn(`${res_data.extraDetails} ${res_data.message}`, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const loginData = async ({ request }) => {
//   const data = await request.formData();
//   const formData = Object.fromEntries(data);
//   const response = await fetch("http://localhost:3000/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//     credentials: 'include'
//   });

//   if (response.ok) {
//     toast("login sucesfull");
//     return redirect("/index");
//   } else {
//     //  localStorage.removeItem("token");
//     const res_data = await response.json();
//     if (res_data.message !== "User Doesn't Exists") {
//       toast.warn(res_data.message, {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     } else {
//       toast.error("User Doesnt Exist", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//       });
//     }
//   }
// };

// export const verify = async () => {
//   try {
    
//     const res = await fetch("http://localhost:3000/user", {
//       method: "GET",
//       credentials:"include"
//     });
    
//     const data = await res.json();
//     // console.log(data);

//     return {
//       user: {
//         userData: data.userData,
//       },
//     };
//   } catch (error) {
//     console.log("collectData verify", error);
//     return { user: null };
//   }
// };

// export const logoutUser=async()=>{
//    const res=await fetch("http://localhost:3000/logout", {
//     method: "GET",
//     credentials: "include",
//   });
//   return res 
// }