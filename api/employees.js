import express from "express";
const router = express.Router();
export default router;
import {
  getEmployees,
  getEmployee,
  updateEmployee,
  createEmployee,
} from "#db/queries/employees";

// TODO: this file!

// GET /employees
router.route("/").get(async (req, res) => {
  try {
    const response = await getEmployees();
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

// POST /employees
router.route("/").post(async (req, res) => {
  const { employees_name, birthday, salary } = req.body || {};
  // Check if body is missing
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: "Request body is required" });
  }
  // Check for missing required fields
  if (!employees_name || !birthday || !salary) {
    return res.status(400).send({ error: "Missing required field(s)" });
  }
  try {
    const newEmployee = await createEmployee({
      employees_name,
      birthday,
      salary,
    });
    res.status(201).send(newEmployee);
  } catch (error) {
    res.status(400).send(error);
  }
});

// GET /employees/:id
router.route("/:id").get(async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getEmployee({ id });
    res.status(200).send(response);
  } catch (error) {
    res.status(400).send(error);
  }
});

// PUT /employees/:id
router.route("/:id").put(async (req, res) => {
  const { id } = req.params;
  const { employees_name, birthday, salary } = req.body || {};
  // Check if body is missing
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: "Request body is required" });
  }
  // Check for missing required fields
  if (!employees_name || !birthday || !salary) {
    return res.status(400).send({ error: "Missing required field(s)" });
  }
  try {
    const updatedEmployee = await updateEmployee({
      id,
      employees_name,
      birthday,
      salary,
    });
    if (!updatedEmployee) {
      return res.status(404).send({ error: "Employee not found" });
    }
    res.status(200).send(updatedEmployee);
  } catch (error) {
    res.status(400).send(error);
  }
});
