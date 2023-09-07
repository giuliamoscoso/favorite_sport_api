import { Router } from "express";
import multer from "multer";

import { InsertDataController } from "./modules/InsertData/InsertDataController";
import { SearchUserController } from "./modules/SearchUser/SearchUserController";

const router = Router();
const multerConfig = multer();

const insertDataController = new InsertDataController();
const searchUserController = new SearchUserController();

router.post("/api/files", multerConfig.single("file"), insertDataController.handle);

router.get("/api/users", multerConfig.single("file"), searchUserController.handle);

export { router };
