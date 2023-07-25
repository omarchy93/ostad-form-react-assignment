import React from "react";
import TransactionItem from "./ TransactionItem";

function TransactionList({ type }) {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  const filteredTransactions = transactions.filter(
    (transaction) => transaction.type === type
  );

  return (
    <div>
      <h3>Transactions:</h3>
      <ul>
        {filteredTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
