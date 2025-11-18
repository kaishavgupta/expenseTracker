import { Navigate, useLoaderData } from "react-router-dom";
import { Balance } from "./balance";
// import { Footer } from "./Layout/footer";
import { FormData } from "./form";
import { Transaction } from "./transaction";
import { useEffect, useState } from "react";
import { deleteTransaction, getTransaction, updateTransaction } from "../../../api/transactionApi";

export const Index = () => {
 const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
  const loadData = async () => {
    const res = await getTransaction();
    if (res) {
      setTransactions(res);
    }
  };
  
  loadData();
  }, []);



  const handleUpdate = async (updated) => {
  const res = await updateTransaction(updated);

  setTransactions((prev) =>
    prev.map((item) =>
      item._id === updated.id ? { ...item, ...updated } : item
    )
  );

  setIsEdit(false);
  setEditData(null);
};


  const handlleDelete = async(id) => {
    console.log("hello delete");
    const res = await deleteTransaction(id);
    console.log(res);

    if (res) {
      setTransactions((prev) => prev.filter((item) => item._id !== id));
    }
  };




  const data = useLoaderData();
  const userData = data?.user?.userData;
  if (userData) {
    return (
      <>
        <main className="container">
          <section className="form-section">
            <FormData
              isEdit={isEdit}
              editData={editData}
              onUpdate={handleUpdate}
            />
          </section>

          {/* <!-- Balance Summary --> */}
          <section className="summary">
            <Balance transactions={transactions}/>
          </section>

          {/* <!-- Transaction List --> */}
          <section className="transactions">
            <Transaction setIsEdit={setIsEdit} setEditData={setEditData} transactions={transactions} handlleDelete={handlleDelete}/>
          </section>
        </main>

        {/* <Footer /> */}
      </>
    );
  }

  return <Navigate to="/login" />;
};
