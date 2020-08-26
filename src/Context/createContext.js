import { createContext } from "react";
const history = [
  { des: "cash", amount: 200 },
  { des: "cash", amount: 200 },
  { des: "cash", amount: 200 },
  { des: "cash", amount: 200 },
  { des: "cash", amount: 200 },
];

export const HISTORY = createContext(history);
