const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const { get } = require("http");


const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb+srv://steve:12345@cluster0.yln7m.mongodb.net/Cluster0?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
var routes=require("./routes/htmlroutes")
var apiroutes=require("./routes/apiroutes.js")
app.use(routes)
app.use(apiroutes)


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

