import {Form} from "react-router-dom"
export const FormData = () => {
//  const fetcher = useFetcher();     
  return (
    <>
      <h2>Add Transaction</h2>
      <Form id="transaction-form" method="post">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title (e.g. Grocery, Salary)"
          required
        />
        <input type="number" id="amount" placeholder="Amount (₹)" name="amount" required />
        <select id="type" name="type" required>
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit" className="btn">
          Add
        </button>
      </Form>
    </>
  );
};
