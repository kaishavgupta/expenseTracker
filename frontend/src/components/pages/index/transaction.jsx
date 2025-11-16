import { useEffect, useState } from "react";
import { deleteTransaction, getTransaction } from "../../../api/transactionApi";
import { MdDelete, MdEdit } from "react-icons/md";

export const Transaction = () => {
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

  const handleEdit = () => {
    console.log("hello edit");
  };
  const handlleDelete = (id) => {
    console.log("hello delete");
    const res = deleteTransaction(id);
    console.log(res);
    
    if (res?.success) {
      setTransactions((prev) => prev.filter((item) => item._id !== id)); // 🔥 removes instantly
    }
  };

  return (
    <>
      <h2>Recent Transactions</h2>

      <ul id="transaction-list">
        {transactions.map((item) => (
          <li
            key={item._id}
            className={`transaction ${
              item.type === "income" ? "income-item" : "expense-item"
            }`}
          >
            <span>{item.title}</span>
            <span>
              {item.type === "income" ? "+ ₹" : "- ₹"}
              {item.amount}
            </span>

            <div className="action-buttons">
              <button className="edit-btn" onClick={handleEdit}>
                <MdEdit size={20} />
              </button>

              <button
                className="delete-btn"
                onClick={() => handlleDelete(item._id)}
              >
                <MdDelete size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
