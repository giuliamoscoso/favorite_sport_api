import { Request, Response } from "express";
import { InsertDataUseCase } from "./InsertDataUseCase";
import { Readable } from "stream";

class InsertDataController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { file } = req;
        if (!file) return res.status(400).send("No file provided");

        const { buffer } = file;
        const readableFile = new Readable();
        readableFile.push(buffer);
        readableFile.push(null);
        if (readableFile.readableLength === 0) return res.status(400).send("Empty file provided.");

        const insertDataUseCase = new InsertDataUseCase();
        const result = await insertDataUseCase.execute(readableFile);

        if (result.status !== 200) return res.status(result.status).send(result.message);
        return res.status(result.status).send(result.message);
    }
}

export { InsertDataController };
