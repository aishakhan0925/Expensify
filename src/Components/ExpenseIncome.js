import React, { useContext } from "react";
import { HISTORY } from "../Context/createContext";
export default function ExpenseIncome() {
  let history = useContext(HISTORY);

  const addTransaction = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h2>
          Your Total Balance
          <br />
          $5000
        </h2>
      </div>
      <div className="expence_income">
        <span className="money plus">
          INCOME
          <br />
          $3000
        </span>
        <span className="money minus">
          EXPENSE
          <br />
          $3000
        </span>
      </div>
      <h2> Transaction History</h2>
      <hr />
      <div>
        {history.map((trans, ind) => {
          return (
            <span className="list">
              <li key={ind}>
                <span>{trans.des}</span>
                <span>{trans.amount}</span>
              </li>
            </span>
          );
        })}
      </div>
      <h2> Add Transaction</h2>
      <hr />
      <div>
        <form className="form_container" onSubmit={addTransaction}>
          <lable>Description</lable>
          <br />

          <input type="text" required placeholder="Enter your Description" />
          <br />

          <lable>Amout</lable>
          <br />

          <input type="number" required placeholder="Enter your Amout" />
          <br />
          <input type="submit" value="ADD TRANSACTION" className="btn" />
        </form>
      </div>
    </div>
  );
}
