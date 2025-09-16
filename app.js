import express from "express";
const app = express();
export default app;
 import employees from "#api/employees";
// TODO: this file!

app.use(express.json());

app.route("/").get((req, res) => {
  res.send("Welcome to the Fullstack Employees API");
});

app.use("/employees", employees);