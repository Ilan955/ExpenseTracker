import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");
  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const amountChanger = (event) => {
    setEnterAmount(event.target.value);
  };

  const dateChangerHandler = (event) => {
    setEnterDate(event.target.value);
    console.log(enteredDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChanger} value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input type="Date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangerHandler}></input>
        </div>
      </div>
      
      <div className="new-expense__actions">
        <button type="button" onClick={props.onSubmitOrCancell} >Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
