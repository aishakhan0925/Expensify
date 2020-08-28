import React, { useContext } from "react";
import { GlobalContext } from "../Context/createContext";

export default function TotalExpense() {
  let { transactions } = useContext(GlobalContext);
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.transactions.length; i++) {
      if (transactions.transactions[i].amount > 0)
        income += transactions.transactions[i].amount;
    }
    return income;
  };
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.transactions.length; i++) {
      if (transactions.transactions[i].amount < 0)
        expense += transactions.transactions[i].amount;
    }
    return expense;
  };
  return (
    <div>
      <div>
        <h2>
          Your Total Balance
          <br />
          {getIncome() + getExpense()}
        </h2>
      </div>
      <div className="expence_income">
        <span className="money plus">
          INCOME
          <br />${getIncome()}
        </span>
        <span className="money minus">
          EXPENSE
          <br />${getExpense()}
        </span>
      </div>
    </div>
  );
}
