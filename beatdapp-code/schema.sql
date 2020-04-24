DROP TABLE IF EXISTS expenseTracker;

CREATE TABLE expenseTracker (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    item_cost DECIMAL(10, 2) NOT NULL,
    category VARCHAR(255) NOT NULL
);