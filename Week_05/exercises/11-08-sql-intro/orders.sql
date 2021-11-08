-- Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.
CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
  order_id INT NOT NULL,
  person_id INT,
	product_name VARCHAR(255),
  product_price NUMERIC,
  quantity INT
);

-- Add 5 orders to the orders table.
INSERT INTO orders (order_id, person_id, product_name, product_price, quantity)
VALUES (100, 001, 'Porsche 911 Turbo S', 210000, 1),
(101, 001, 'Porsche Tumbler', 79, 3),
(102, 002, 'Porsche Cayenne E-Hybrid', 185000, 1),
(103, 003, 'Porsche Panamera Brake Pads', 928, 4),
(104, 004, 'Porsche Keychain', 29, 10);


-- Calculate the total number of products ordered.
SELECT SUM(quantity) FROM orders;


-- Calculate the total order price.
SELECT SUM(product_price) FROM orders;


-- Calculate the total order price by a single person_id.
SELECT SUM(product_price * quantity) FROM orders WHERE person_id = 001;

