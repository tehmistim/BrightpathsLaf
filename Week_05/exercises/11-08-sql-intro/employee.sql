-- List all employee first and last names only that live in Calgary.
SELECT first_name, last_name FROM employee
	WHERE city LIKE 'Calgary';

-- Find the birthdate for the youngest employee.
SELECT Max(birth_date) from employee;

-- Find the birthdate for the oldest employee.
SELECT MIN(birth_date) from employee;

-- Find everyone that reports to Nancy Edwards (use the ReportsTo column).
SELECT * FROM employee WHERE reports_to = 2;

-- Count how many people live in Lethbridge.
SELECT COUNT(*) FROM employee WHERE city = 'Lethbridge';

