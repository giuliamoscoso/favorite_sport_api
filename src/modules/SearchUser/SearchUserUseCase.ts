import User from "../../models/user";
import userRepository from "../../repositories/users-repository";

class SearchUserUseCase {
    /**
     * Returns all users from the database that match, even partially, the filter.
     */
    async execute(filter: string): Promise<{ status: number; message: string; users?: User[] }> {
        try {
            const foundUsers: User[] = await userRepository.search(filter);
            if (foundUsers.length === 0) return { status: 404, message: "No users found." };

            return {
                status: 200,
                message: foundUsers.length + " users found.",
                users: foundUsers,
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

export { SearchUserUseCase };
