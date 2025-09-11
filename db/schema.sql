DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    id serial PRIMARY KEY, 
    employees_name VARCHAR(255) NOT NULL,
    birthday date NOT NULL,
    salary INT NOT NULL
);

