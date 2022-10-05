import React from "react";
import ExpenseItems from "./Expense";
import stl from "./ExpenseData.module.scss";

const ExpenseData = ({ data }) => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const dates = dd + "/" + mm + "/" + yyyy;

  return (
    <div className={stl.datacontainer}>
      <div className={stl.rows}>
        <ExpenseItems
          key={data.id}
          date={dates}
          title={"Mac-Book"}
          amount={450}
          time={new Date().toLocaleTimeString()}
        />
      </div>
    </div>
  );
};

export default ExpenseData;
