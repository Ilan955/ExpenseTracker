import React from "react";
import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css";
const NewExpense = (props) => {
  const [expenseClicked, setNewExpenseClick] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onExpenseSaved(expenseData);
    clickHandler();
    // console.log(expenseData);
  };

  const clickHandler = () => {
    if (!expenseClicked) setNewExpenseClick(true);
    else setNewExpenseClick(false);
    console.log(expenseClicked);
  };

  return (
    <div className="new-expense">
      {!expenseClicked && (
        <button type="submit" onClick={clickHandler}>
          Add Expense
        </button>
      )}

      {expenseClicked === true && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onSubmitOrCancell={clickHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
