/** @returns the employee created according to the provided details */
import db from "#db/client";

export async function createEmployee({ employees_name, birthday, salary }) {
  const SQL = `
  INSERT INTO employees(employees_name, birthday, salary)
        VALUES($1, $2 , $3) RETURNING *
 
  `;
  const {
    rows: [employees],
  } = await db.query(SQL, [employees_name, birthday, salary]);
  return employees;
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  // TODO
  const sql = `
  SELECT *
  FROM Employees
  `;
  const { rows } = await db.query(sql);
  console.log(rows);
  return rows;
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee({ id }) {
  // TODO
  const SQL = `
        SELECT * FROM employees
        where id = $1
    `;
  const { rows } = await db.query(SQL, [id]);
  return rows[0];
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, employees_name, birthday, salary }) {
  const SQL = `
    UPDATE employees
    SET
      employees_name = $2,
      birthday = $3,
      salary = $4
    WHERE id = $1
    RETURNING *
  `;
  const { rows } = await db.query(SQL, [id, employees_name, birthday, salary]);
  return rows[0];
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
  const SQL = `
        UPDATE dogs
        SET
          employees_name = $2,
          birthday = $3
          salary =$4
        where id = $1
        RETURNING *
    `;
  const { rows } = await db.query(SQL, [id, employees_name, birthday, salary]);
  return rows[0];
}
