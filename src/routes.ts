import { Router } from "express";
import { InsertDataController } from "./modules/InsertData/InsertDataController";
import { SearchUserController } from "./modules/SearchUser/SearchUserController";

const router = Router();
const insertDataController = new InsertDataController();
const searchUserController = new SearchUserController();

router.post("/api/files", insertDataController.handle);

router.get("/api/users", searchUserController.handle);

export { router };
