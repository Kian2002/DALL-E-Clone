import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

import generateImage from "../controllers/generateImageController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL-E!" });
});

router.post("/generate", generateImage);

export default router;
