import { Request, Response } from "express";

class InsertDataController {
    async handle(req: Request, res: Response) {
        // TODO
        res.status(200).send("InsertDataController.handle");
    }
}

export { InsertDataController };
