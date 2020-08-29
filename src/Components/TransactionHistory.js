import React, { useContext } from "react";
import { GlobalContext } from "../Context/createContext";

export default function TransactionHistory() {
  let { transactions, delTransaction } = useContext(GlobalContext);
  const transactionClass = transactions.transactions.map((i) => {
    return i.amount;
  });
  console.log(transactionClass);
  const transactionType = transactionClass > 0 ? "positive" : "negative";
  console.log(transactionType);

  // const sign = transactions.transactions.amount > 0 ? "+" : "-";
  // console.log(transactions);
  return (
    <div>
      <h2> Transaction History</h2>
      <hr />
      <div>
        {transactions.transactions.map((trans, ind) => {
          return (
            <span className="list">
              <li key={trans.id} className={transactionType}>
                <span>{trans.desc}</span>
                <span>${Math.abs(trans.amount)}</span>
              </li>
              <button
                className="del-btn"
                onClick={() => {
                  delTransaction(trans.id);
                }}
              >
                X
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
}
