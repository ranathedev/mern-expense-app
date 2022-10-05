import React, { useState } from "react";
import stl from "./ExpenseForm.module.scss";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");

  const validate = (event) => {
    let title = document.getElementById("title");
    let amount = document.getElementById("amount");
    let date = document.getElementById("date");
    let time = document.getElementById("time");
    let flag = 0;

    if (title.value === "") {
      alert("Title field is empty");
      flag = 0;
    } else if (amount.value <= 0) {
      alert("Amount field is empty");
      flag = 0;
    } else if (date.value === "") {
      alert("Date field is empty");
      flag = 0;
    } else if (time.value === "") {
      alert("Time field is empty");
      flag = 0;
    } else {
      flag = 1;
    }

    if (flag) {
      event.preventDefault();
      // console.log("return is true");

      const newExpenseData = {
        id: Math.floor(Math.random() * 100 + (1).toString()),
        title: enteredTitle,
        price: enteredAmount,
        date: new Date(enteredDate).toLocaleDateString(),
        time: enteredTime,
      };

      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      setEnteredTime("");
      // console.log(newExpenseData);
      props.saveNewData(newExpenseData);
    } else {
      event.preventDefault();
      // console.log("return is false");
    }
  };

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const timeHandler = (event) => {
    setEnteredTime(event.target.value);
  };

  return (
    <form className={stl.form} onSubmit={validate}>
      <div className={stl.newexpenses}>
        <div className={stl.newtitle}>
          <label>Title :</label>
          <input
            className={stl.input}
            type="text"
            onChange={titleHandler}
            value={enteredTitle}
            id="title"
          />
        </div>
        <div className={stl.newamount}>
          <label>Amount :</label>
          <input
            className={stl.input}
            type="number"
            onChange={amountHandler}
            step="0.01"
            value={enteredAmount}
            id="amount"
          />
        </div>
        <div className={stl.newdate}>
          <label>Date :</label>
          <input
            className={stl.input}
            type="date"
            onChange={dateHandler}
            value={enteredDate}
            id="date"
          />
        </div>
        <div className={stl.newtime}>
          <label>Time :</label>
          <input
            className={stl.input}
            type="time"
            onChange={timeHandler}
            value={enteredTime}
            id="time"
          />
        </div>
        <div className={stl.btnaddexpense}>
          <button className={stl.button}>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
