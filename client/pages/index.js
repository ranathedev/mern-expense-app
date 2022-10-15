import { useEffect, useState } from "react";
import Axios from "axios";

import LoadingScreen from "./loadingscreen";

import stl from "../styles/Home.module.scss";

const generateRandomString = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default function Home() {
  const [listOfExpense, setListOfExpenses] = useState([]);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredTime, setEnteredTime] = useState("");
  const [handleEffect, setHandleEffect] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setInterval(() => {
      setLoading(true);
      Axios.get("http://localhost:3001/getExpenses").then((response) => {
        const rev = response.data.reverse();
        setListOfExpenses(rev);
      });
    }, 4000);

    setLoading(false);
  };

  const handleUpdate = (id) => {
    Axios.put(`http://localhost:3001/update/${id}`);
  };

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

      const newExpenseData = {
        date: new Date(enteredDate).toLocaleDateString(),
        title: enteredTitle,
        amount: enteredAmount,
        time: enteredTime,
      };

      Axios.post("http://localhost:3001/addExpense", {
        ...newExpenseData,
      }).then((response) => {
        setListOfExpenses([
          {
            ...newExpenseData,
          },
          ...listOfExpense,
        ]);
      });

      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
      setEnteredTime("");
      setListOfExpenses([newExpenseData, ...listOfExpense]);
    } else {
      event.preventDefault();
    }
  };

  const handleDelete = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
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

  useEffect(() => {
    getData();
  }, [handleEffect]);

  return (
    <div className={stl.container}>
      <div className={stl.formContainer}>
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
                onFocus={(e) => e.target.select()}
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
                onFocus={(e) => e.target.select()}
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
                onFocus={(e) => e.target.select()}
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
                onFocus={(e) => e.target.select()}
              />
            </div>
            <div className={stl.btnaddexpense}>
              <button type="submit" className={stl.button}>
                Add Expense
              </button>
            </div>
          </div>
        </form>
      </div>
      {loading ? (
        listOfExpense.length != 0 && (
          <div>
            <table className={stl.dataContainer}>
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Title</td>
                  <td>Price(PKR)</td>
                  <td>Time</td>
                </tr>
              </thead>
              <tbody>
                {listOfExpense?.map((item, i) => (
                  <tr key={i} className={stl.rows}>
                    <td>{item.date}</td>
                    <td>{item.title}</td>
                    <td>
                      {item.amount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </td>
                    <td>{item.time}</td>
                    <td>
                      <button
                        onClick={() => {
                          handleDelete(item._id);
                          setLoading(true);
                          setHandleEffect(generateRandomString(5));
                        }}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => {
                          handleUpdate(_id);
                        }}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <LoadingScreen />
      )}
    </div>
  );
}
