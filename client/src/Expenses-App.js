import React, { useEffect, useState } from "react";
import ExpenseData from "./components/Expenses/ExpenseData";
import NewExpenses from "./components/Expenses/NewExpenses";

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setExpenses(data);
      });
  }, []);

  const addExpenseHandler = (expense) => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "content-Type": "application/json",
      },
    });
    // console.log(updatedExpense);
  };

  return (
    <div>
      <NewExpenses addExpenseData={addExpenseHandler} />
      <ExpenseData data={expenses} />
    </div>
  );
};

export default Expense;
