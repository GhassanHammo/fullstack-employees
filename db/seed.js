import db from "#db/client";
import { createEmployee } from "./queries/employees.js";
await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO

  const employees = [
    { employees_name: "Ghassan1", birthday: "2025-01-30", salary: 100000 },
    { employees_name: "Ghassan2", birthday: "2025-02-30", salary: 100000 },
    { employees_name: "Ghassan3", birthday: "2025-03-30", salary: 100000 },
    { employees_name: "Ghassan4", birthday: "2025-04-30", salary: 100000 },
    { employees_name: "Ghassan5", birthday: "2025-05-30", salary: 100000 },
    { employees_name: "Ghassan7", birthday: "2025-06-30", salary: 100000 },
    { employees_name: "Ghassan8", birthday: "2025-07-30", salary: 100000 },
    { employees_name: "Ghassan9", birthday: "2025-08-30", salary: 100000 },
    { employees_name: "Ghassan10", birthday: "2025-09-30", salary: 100000 },
    { employees_name: "Ghassan11", birthday: "2025-10-30", salary: 100000 },
    { employees_name: "Ghassan12", birthday: "2025-11-30", salary: 100000 },
    { employees_name: "Ghassan13", birthday: "2025-12-30", salary: 100000 },
  ];

  for (let employee of employees) {
    let employees_name = employee.employees_name;
    let birthday = employee.birthday;
    let salary = employee.salary;

    try {
      const response = await createEmployee({
        employees_name,
        birthday,
        salary,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
}
