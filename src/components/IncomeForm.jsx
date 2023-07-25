import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const IncomeForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddIncome = (e) => {
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
  return (
    <div>
      <div>
        <h1 className=" text-xl font-bold">Income form</h1>
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
        <div className="mx-auto">
          <button
            className=" btn btn-outline btn-accent"
            onClick={handleAddIncome}
            type="submit"
          >
            Add Income
          </button>
        </div>
      </form>
    </div>
  );
};

export default IncomeForm;
