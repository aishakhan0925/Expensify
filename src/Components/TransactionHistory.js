import React, { useContext } from "react";
import { GlobalContext } from "../Context/createContext";

export default function TransactionHistory() {
  let { transactions, delTransaction } = useContext(GlobalContext);
  const transactionType = transactions.amount > 0 ? "positive" : "negative";
  // const sign = transactions.amount > 0 ? "+" : "-";
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
