import React from "react";
import stl from "./NewExpenses.module.scss";
import ExpenseForm from "./ExpenseForm";

const NewExpenses = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseDataNew = {
      ...enteredExpenseData,
    };

    // console.log(expenseDataNew);
    props.addExpenseData(expenseDataNew);
  };
  return (
    <div className={stl.expenseform}>
      <ExpenseForm saveNewData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
