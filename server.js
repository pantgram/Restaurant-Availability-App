// Example using Express.js
const express = require("express");
const app = express();
// Example defining a route in Express
app.get("/", (req, res) => {
  res.send("<h1>Hello, Restaurant Server!</h1>");
});
// Example specifying the port and starting the server
const port = process.env.PORT || 3000; // You can use environment variables for port configuration
const customersRoute = require("./routes/customers");
const tablesRoute = require("./routes/tables");
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/customers", customersRoute);
app.use("/tables", tablesRoute);
