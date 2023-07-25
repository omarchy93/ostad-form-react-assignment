// TransactionItem.js
import React from "react";

function TransactionItem({ transaction }) {
  return (
    <li>
      {transaction.description} - {transaction.amount}
    </li>
  );
}

export default TransactionItem;
