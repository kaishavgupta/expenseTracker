import {Form} from "react-router-dom"
export const FormData = ({ isEdit, editData, onUpdate }) => {
  
  return (
    <>
      <h2>{isEdit ? "Update Transaction" : "Add Transaction"}</h2>

      <Form
        id="transaction-form"
        method={isEdit ? "patch" : "post"}
        onSubmit={(e) => {
          if (isEdit) {
            e.preventDefault();
            const form = new window.FormData(e.target);
            onUpdate({
              id: editData._id,
              title: form.get("title"),
              amount: form.get("amount"),
              type: form.get("type"),
            });
          }
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="title"
          defaultValue={isEdit ? editData.title : ""}
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="amount"
          defaultValue={isEdit ? editData.amount : ""}
          required
        />

        <select name="type" defaultValue={isEdit ? editData.type : ""}>
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <button type="submit" className={isEdit? "update":"btn"}>
          {isEdit ? "Update" : "Add"}
        </button>
      </Form>
    </>
  );
};

