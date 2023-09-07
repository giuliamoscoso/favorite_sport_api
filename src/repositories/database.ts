import sqlite3 from "sqlite3";

const DBSOURCE = "db.sqlite";

const SQL_CREATE_USERS_TABLE = `
  CREATE TABLE IF NOT EXISTS users (
    id integer PRIMARY KEY AUTOINCREMENT,
    name text,
    city text,
    country text,
    favorite_sport text
  )
`;

const database = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log("Connected to the SQLite database.");
        database.run(SQL_CREATE_USERS_TABLE, (err) => {
            if (err) {
                console.error(err.message);
                throw err;
            } else console.log("Created users table.");
        });
    }
});

export default database;
