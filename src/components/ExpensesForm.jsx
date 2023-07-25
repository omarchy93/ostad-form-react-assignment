import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const ExpensesForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpenses = (e) => {
    e.preventDefault();
    const transaction = {
      id: uuidv4(),
      description,
      amount: +amount,
      type: "income",
    };
    // Retrieve existing transactions from localStorage
    const existingTransactions =
      JSON.parse(localStorage.getItem("transactions")) || [];
    // Add the new transaction to the existing transactions
    const updatedTransactions = [...existingTransactions, transaction];
    // Save the updated transactions to localStorage
    localStorage.setItem("transactions", JSON.stringify(updatedTransactions));

    setDescription("");
    setAmount("");
  };

  const submit = () => {};
  return (
    <div>
      <div>
        <h1 className=" text-xl font-bold">Expenses form</h1>
      </div>
      <form>
        <label>
          <input
            className="input input-bordered input-success w-full max-w-xs"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Amount:
          <input
            className="input input-bordered input-success w-full max-w-xs"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <button
          className="btn btn-outline btn-accent"
          onClick={handleAddExpenses}
          type="submit"
        >
          Add Expens
        </button>
      </form>
    </div>
  );
};

export default ExpensesForm;
