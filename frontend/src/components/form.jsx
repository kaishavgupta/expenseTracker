import { useState } from "react";
import {Form} from "react-router-dom"
export const FormData = () => {
     const [transaction,setTransaction]=useState({
        title:"",
        amount:0,
        type:""
     })

  return (
    <>
      <h2>Add Transaction</h2>
      <Form id="transaction-form">
        <input
          type="text"
          id="title"
          placeholder="Title (e.g. Grocery, Salary)"
          required
        />
        <input type="number" id="amount" placeholder="Amount (₹)" required />
        <select id="type" required>
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit" class="btn">
          Add
        </button>
      </Form>
    </>
  );
};
