import React from "react";
import PropTypes from "prop-types";
import stl from "./Expense.module.scss";

import clsx from "clsx";

const ExpenseItems = (props) => {
  return (
    <div className={stl.expenseitems}>
      <div className={clsx(stl.expensedate, stl.data)}>{props.date}</div>
      <div className={clsx(stl.title, stl.data)}>{props.title}</div>
      <div className={clsx(stl.expenseamount, stl.data)}>${props.amount}</div>
      <div className={stl.time}>{props.time}</div>
    </div>
  );
};

ExpenseItems.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.string,
};

export default ExpenseItems;
