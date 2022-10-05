const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb://ranaintizar:aqeRl1oW3Hoe3Ihb@ac-g9cm0ko-shard-00-00.ky8fmng.mongodb.net:27017,ac-g9cm0ko-shard-00-01.ky8fmng.mongodb.net:27017,ac-g9cm0ko-shard-00-02.ky8fmng.mongodb.net:27017/MernProject?ssl=true&replicaSet=atlas-qqodtl-shard-0&authSource=admin&retryWrites=true&w=majority"
);

app.get("/getExpenses", async (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/addExpense", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json();
});

app.put("/update", async (req, res) => {
  const newTitle = req.body.newTitle;
  const id = req.body.id;

  try {
    await UserModel.findById(id, (err, updatedTitle) => {
      updatedTitle.title = newTitle;
      updatedName.save();

      res.json();
    });
  } catch {}
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;

  await UserModel.findByIdAndDelete(id).exec();
  res.json();
});

app.listen(3001, () => {
  console.log("Server is running on PORT:3001");
});
