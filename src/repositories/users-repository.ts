import User from "../models/user";
import database from "./database";

const userRepository = {
    insert: async (user: User): Promise<number> => {
        const sql = `
        INSERT INTO users (name, city, country, favorite_sport)
        VALUES (?, ?, ?, ?)
      `;
        const params = [user.name, user.city, user.country, user.favorite_sport];

        try {
            const result = await new Promise<number>((resolve, reject) => {
                database.run(sql, params, function (err) {
                    if (err) {
                        console.error(err.message);
                        reject(err);
                    }
                    resolve(this.lastID);
                });
            });

            return result;
        } catch (error) {
            throw error;
        }
    },
    search: async (filter: string): Promise<User[]> => {
        const sql = `
        SELECT * FROM users
        WHERE name LIKE ?
        OR city LIKE ?
        OR country LIKE ?
        OR favorite_sport LIKE ?
      `;
        const params = [`%${filter}%`, `%${filter}%`, `%${filter}%`, `%${filter}%`];

        try {
            const rows = await new Promise<User[]>((resolve, reject) => {
                database.all(sql, params, (err, rows) => {
                    if (err) {
                        console.error(err.message);
                        reject(err);
                    }
                    resolve(rows as User[]);
                });
            });

            return rows;
        } catch (error) {
            throw error;
        }
    },
};

export default userRepository;
