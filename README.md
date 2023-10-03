# API Project

[![Português](https://img.shields.io/badge/Idioma-Portugu%C3%AAs-blue)](README.pt.md) [![English](https://img.shields.io/badge/Language-English-green)](README.md)

This project is built with Node.js, TypeScript, and SQLite. The project includes a POST route for inserting data from a CSV file into a database and a GET route for filtering users based on the query parameters.

## Project Overview

The API project aims to provide a seamless integration between the frontend and the database by exposing two main routes:

1. **POST /api/users**: This route allows you to insert data from a CSV file into the database. The CSV file should contain user information such as name, email, and address. The API will parse the CSV file and insert the data into the 'users' table in the SQLite database.

2. **GET /api/users**: This route lets you filter users based on the query parameters. The API will compare the text passed in the query with every column of the 'users' table in the database and return the matching results.

## Technologies Used

The project is built using the following technologies:

- Node.js: A JavaScript runtime environment that allows us to run JavaScript code outside a web browser.
- TypeScript: A superset of JavaScript that adds static typing and other features to enhance code quality and maintainability.
- SQLite: A lightweight, file-based database management system that provides a simple and efficient way to store and retrieve data.

## Prerequisites

Before running the project, ensure that you have the following prerequisites installed:

- Node.js: [Download and install Node.js](https://nodejs.org/en/download/)
- SQLite: [Download and install SQLite](https://www.sqlite.org/download.html)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install`
4. Start the server: `npm run dev`

## API Endpoints

The API exposes the following endpoints:

- **POST /api/users**: Use this endpoint to insert data from a CSV file into the database. The CSV file should be sent as a multipart/form-data request with the 'file' field containing the CSV file.

- **GET /api/users**: Use this endpoint to filter users based on the query parameters. The API will compare the text passed in the query with every column of the 'users' table in the database and return the matching results.
