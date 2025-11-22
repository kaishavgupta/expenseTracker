import { Form } from "react-router-dom";
export const FormData = ({ isEdit, editData, onUpdate, handleAdd, setSelectedType }) => {

  const Button = ({ children }) => {
    return (
      <button type="submit" className={isEdit ? "update" : "btn"}>
        {children}
      </button>
    );
  };

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
          } else {
            setTimeout(() => handleAdd(), 50);
            // handleAdd();
          }
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={isEdit ? editData.title : ""}
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          defaultValue={isEdit ? editData.amount : ""}
          required
        />

        <select
          name="type"
          required
          defaultValue={isEdit ? editData.type : ""}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <Button>{isEdit ? "Update" : "Add"}</Button>
      </Form>
    </>
  );
};
