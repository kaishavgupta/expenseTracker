import { useEffect, useState } from "react";
import { getTransaction } from "../../../api/transactionApi";

export const Balance = () => {
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


  const income = () => {
    let sum = 0;

    transactions.map((item) => {
      if (item.type === "income") {
        sum += Number(item.amount);
      }
    });
    return sum;
  };

  const expense = () => {
    let sum = 0;

    transactions.map((item) => {
      if (item.type === "expense") {
        sum += Number(item.amount);
      }
    });
    return sum;
  };




  return (
    <>
      <div className="card income">
        <h3>Income</h3>
        <p id="income-amount">₹{income()}</p>
      </div>
      <div className="card expense">
        <h3>Expense</h3>
        <p id="expense-amount">₹{expense()}</p>
      </div>
      <div className="card balance">
        <h3>Balance</h3>
        <p id="balance-amount">₹{income()-expense()}</p>
      </div>
    </>
  );
};
