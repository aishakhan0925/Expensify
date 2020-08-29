import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { GlobalContext } from "../Context/createContext";

export default function AddTransaction() {
  let { addTransaction } = useContext(GlobalContext);

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);

  const handleTransaction = (e) => {
    e.preventDefault();
    // console.log(desc, amount);
    addTransaction({
      id: new Date().getTime(),
      desc: desc,
      amount: Number(amount),
    });
  };
  return (
    <div>
      <h2> Add Transaction</h2>
      <hr />
      <div>
        <br />

        <form className="form_container" onSubmit={handleTransaction}>
          <TextField
            type="text"
            id="standard-full-width"
            label="Description"
            style={{ margin: 8 }}
            placeholder="Enter Your Description"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            type="number"
            id="standard-full-width"
            label="Amount"
            style={{ margin: 8 }}
            placeholder="Enter Your Amount"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <br />
          <input type="submit" value="ADD TRANSACTION" className="btn" />
        </form>
      </div>
    </div>
  );
}
