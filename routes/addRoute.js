import express from "express";
import { upload } from "../middleware/uploads.js";
import { addAmin, getAllProjects } from "../Controllers/admin.js";

const router = express.Router();
router.post("/project", upload.single("image"), addAmin);
router.get("/getAll", getAllProjects);
export default router;
