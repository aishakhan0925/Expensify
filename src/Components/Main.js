import React from "react";
import { Header, TransactionHistory, AddTransaction, TotalExpense } from ".";
import { GlobalProvider } from "../Context/createContext";
export default function Main() {
  return (
    <GlobalProvider>
      <div className="main_container">
        <Header />
        <TotalExpense />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
