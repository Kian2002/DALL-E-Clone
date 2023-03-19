import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

import getPosts from "../controllers/getPostsController.js";
import createPost from "../controllers/createPostController.js";

const router = express.Router();

router.get("/all", getPosts);

router.post("/create", createPost);

export default router;
