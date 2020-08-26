import React, { useContext, useState } from "react";
import { Header, ExpenseIncome } from ".";
import { HISTORY } from "../Context/createContext";
export default function Main() {
  let history = useContext(HISTORY);
  return (
    <HISTORY.Provider value={history}>
      <div className="main_container">
        <Header />
        <ExpenseIncome />
      </div>
    </HISTORY.Provider>
  );
}
