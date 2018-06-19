CREATE DATABASE [IF NOT EXISTS] burgers_db;
USE [IF NOT EXISTS] burgers_db;
CREATE TABLE [IF NOT EXISTS] burgers (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
burger_name VARCHAR NOT NULL,
devoured BOOLEAN NOT NULL
);

INSERT INTO burgers (burger_name)
VALUES ("Double Double"), ("Pastrami Bacon Avocado Burger"), ("Beyond Burger"), ("Truffle Burger")

