import { IoAddOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Navigate, useLoaderData } from "react-router-dom";
import { Balance } from "./balance";
import { FormData } from "./form";
import { Transaction } from "./transaction";
import { useEffect, useState } from "react";
import {
  // deleteTransaction,
  // getTransaction,
  // updateTransaction,
} from "../../../api/fetch";

import { deleteTransaction, getTransaction, updateTransaction } from "../../../api/transactionApi";


export const Index = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState(null);
  const [plus, setplus] = useState(true);
  const [transactions, setTransactions] = useState([]);
  const [selectedType, setSelectedType] = useState(""); // <-- NEW

  const loadData = async () => {
    const res = await getTransaction();
    console.log("Index ",res);
    
    if (res) {
      setTransactions(res);
    }
  };

  useEffect(() => {
    loadData();
    console.log("First ",transactions);
    
  }, []);

  const handleUpdate = async (updated) => {
    await updateTransaction(updated);

    setTransactions((prev) =>
      prev.map((item) =>
        item._id === updated.id ? { ...item, ...updated } : item
      )
    );

    setIsEdit(false);
    setEditData(null);
    setplus(true);
    setSelectedType(""); // reset color
  };

  const handlleDelete = async (id) => {
    const res = await deleteTransaction(id);
    if (res) {
      setTransactions((prev) => prev.filter((item) => item._id !== id));
    }
  };

  const handleAdd = async () => {
    await loadData();
    setplus(true);
    setSelectedType(""); // reset color
  };

  const data = useLoaderData();
  const userData = data?.user?.userData;

  if (userData) {
    return (
      <>
        <main className="container">

          {/* Add Button */}
          {plus ? (
            <div className="addBtn" onClick={() => setplus((prev) => !prev)}>
              Add a Transaction <IoAddOutline />
            </div>
          ) : (
            <section className={`form-section ${selectedType}`}>
              <div onClick={() => { setplus(true); setSelectedType(""); }}>
                <IoIosCloseCircleOutline />
              </div>

              <FormData
                isEdit={isEdit}
                editData={editData}
                onUpdate={handleUpdate}
                handleAdd={handleAdd}
                setSelectedType={setSelectedType}   // <-- PASS DOWN
              />
            </section>
          )}

          {/* Summary */}
          <section className="summary">
            <Balance transactions={transactions} />
          </section>

          {/* Transactions */}
          <section className="transactions">
            <Transaction
              setIsEdit={setIsEdit}
              setEditData={setEditData}
              transactions={transactions}
              handlleDelete={handlleDelete}
              setplus={setplus}
            />
          </section>
        </main>
      </>
    );
  }

  return <Navigate to="/login" />;
};
