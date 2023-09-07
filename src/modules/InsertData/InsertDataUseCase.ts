import { Readable } from "stream";
import readline from "readline";
import User from "../../models/user";
import userRepository from "../../repositories/users-repository";

class InsertDataUseCase {
    /**
     * Inserts all data from the user object into the database.
     */
    async execute(readableFile: Readable): Promise<{ status: number; message: string }> {
        try {
            const usersLine = readline.createInterface({
                input: readableFile,
            });

            const users: User[] = [];

            for await (let line of usersLine) {
                const userLineSplit = line.split(",");
                if (userLineSplit[0] === "name") continue;
                users.push({
                    name: userLineSplit[0],
                    city: userLineSplit[1],
                    country: userLineSplit[2],
                    favorite_sport: userLineSplit[3],
                });
            }

            if (users.length === 0) return { status: 400, message: "Empty file provided." };

            users.forEach((user: User) => {
                userRepository.insert(user);
            });

            return {
                status: 200,
                message: "Data inserted successfully!",
            };
        } catch (error) {
            if (error instanceof Error) {
                return {
                    status: 400,
                    message: error.message,
                };
            } else {
                return {
                    status: 500,
                    message: "Internal server error.",
                };
            }
        }
    }
}

export { InsertDataUseCase };
