import { useState } from "react";
import ExpensItem from "./ExpensItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {
  let yearPicked;
  const [filterYear, setFilterYear] = useState("2020");
  console.log(filterYear);
  const whenPickedYear = (year) => {
    yearPicked = year;
    console.log("the year is :" + year);
    setFilterYear(year);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() == filterYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onClickOnYear={whenPickedYear}
        ></ExpensesFilter>
        <ExpensesChart expenses= {filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </li>
  );
};
export default Expenses;
