// routes/customers.js
const express = require("express");
const router = express.Router();

// Define a route
router.get("/", (req, res) => {
  res.send("this is customer route"); // this gets executed when user visit http://localhost:3000/customers
});

router.get("/101", (req, res) => {
  res.send("this is customer 101 route"); // this gets executed when user visit http://localhost:3000/customers/101
});

router.get("/102", (req, res) => {
  res.send("this is customer 102 route"); // this gets executed when user visit http://localhost:3000/customers/102
});

// export the router module so that server.js file can use it
module.exports = router;
