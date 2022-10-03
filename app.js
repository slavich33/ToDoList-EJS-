const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");
const date = require(__dirname + "/date.js");



const app = express();

const items = ["Buy food", "Cook Food", "Eat food"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  const day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });

});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res) {
  const item = req.body.newItem;

})

app.post("/", function(req, res) {

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
  // console.log(req.body.list);

// res.sendFile(__dirname + "/index.html");
  // res.send("Server is up an running");
});

app.listen(3000, function() {
  console.log("Server has started and runnning now");
});




// let currentDay = today.getDay()
//   switch (currentDay) {
//     case 0:
//       day = "Sunday";
//
//       break;
//     case 1:
//       day = "Monday";
//       console.log("Monday");
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//     default:
// console.log("Error: current day is equal to: " + currentDay);
//   }
