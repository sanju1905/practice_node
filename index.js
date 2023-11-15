const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Sanjay</h1>");
});

const papa = [
  {
    id: 1,
    food: "Choco",
  },
  {
    id: 2,
    food: "Buttorscoth",
  },
];

app.listen(3000, () => {
  console.log("Server is running");
});

app.post("/addpapa", (req, res) => {
 const { id, food } = req.body;
 papa.push({ id, food });
 console.log(papa);
 res.send("Data Received");
});

app.get("/papa", (req, res) => {
  res.json(papa);
});

// accessing one element
app.get('/papa/:id', (req, res) => {
  const WholeData = papa.find(item => item.id.toString() === req.params.id);
  if (WholeData) {
    res.json(WholeData);
  } else {
    res.status(404).send("Data not found");
  }
});

app.delete('/deletepapa/:id', (req, res) => {
  const indexToDelete = papa.findIndex(item => item.id.toString() === req.params.id);
  
  if (indexToDelete !== -1) {
    papa.splice(indexToDelete, 1);
    res.send(`Element with id ${req.params.id} deleted`);
  } else {
    res.status(404).send(`Element with id ${req.params.id} not found`);
  }
});
