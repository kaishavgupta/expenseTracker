
import { MdDelete, MdEdit } from "react-icons/md";
// import { toast } from "react-toastify";

export const Transaction = ({setIsEdit,setEditData,transactions,handlleDelete,setplus}) => {
  
  const Txtate=(id)=>{
      const timestamp = id; 
    const dateObject = new Date(timestamp);
    return dateObject.toLocaleString();
  }
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

            {Txtate(item._id)}

            <div className="action-buttons">
              <button
                className="edit-btn"
                onClick={() => {
                  setIsEdit(true);
                  setEditData(item);
                  setplus((prev)=>!prev)
                }}
              >
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
