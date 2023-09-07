import { Request, Response } from "express";

class SearchUserController {
    async handle(req: Request, res: Response) {
        // TODO
        res.status(200).send("SearchUserController.handle");
    }
}

export { SearchUserController };
