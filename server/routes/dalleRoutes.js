import express from "express";
import { Configuration, OpenAIApi } from "openai";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello From DALL-E Backend!");
});

export default router;
