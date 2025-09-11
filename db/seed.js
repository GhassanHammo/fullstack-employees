import db from "#db/client";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO

  const Employees = [
    
   {employees_name: "Ghassan1", birthday: "2025-01-30", salary: "100,000$"},
   {employees_name: "Ghassan1", birthday: "2025-02-30", salary: "200,000$"},
   {employees_name: "Ghassan1", birthday: "2025-03-30", salary: "300,000$"},
   {employees_name: "Ghassan1", birthday: "2025-04-30", salary: "400,000$"},
   {employees_name: "Ghassan1", birthday: "2025-05-30", salary: "500,000$"},
   {employees_name: "Ghassan1", birthday: "2025-06-30", salary: "600,000$"},
   {employees_name: "Ghassan1", birthday: "2025-07-30", salary: "700,000$"},
   {employees_name: "Ghassan1", birthday: "2025-08-30", salary: "800,000$"},
   {employees_name: "Ghassan1", birthday: "2025-09-30", salary: "900,000$"},
   {employees_name: "Ghassan1", birthday: "2025-10-30", salary: "1000,000$"},
   {employees_name: "Ghassan1", birthday: "2025-11-30", salary: "110,000$"},
   {employees_name: "Ghassan1", birthday: "2025-12-30", salary: "120,000$"}
   

  
  ]

}
