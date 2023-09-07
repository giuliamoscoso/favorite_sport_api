import { Request, Response } from "express";
import { SearchUserUseCase } from "./SearchUserUseCase";

class SearchUserController {
    async handle(req: Request, res: Response) {
        if (!req.query.q) return res.status(400).send("Missing query parameter.");
        const { q } = req.query;
        const searchUserUseCase = new SearchUserUseCase();
        const result = await searchUserUseCase.execute(q.toString());

        if (result.status !== 200) {
            return res.status(result.status).send(result.message);
        }
        return res.status(result.status).send(result.users);
    }
}

export { SearchUserController };
