export const Transaction = () => {
  return (
    <>
      <h2>Recent Transactions</h2>
      <ul id="transaction-list">
        {/* <!-- JS will inject list items here --> */}
        <li class="transaction income-item">
          <span>Salary</span>
          <span>+ ₹5000</span>
        </li>
        <li class="transaction expense-item">
          <span>Groceries</span>
          <span>- ₹800</span>
        </li>
      </ul>
    </>
  );
};
