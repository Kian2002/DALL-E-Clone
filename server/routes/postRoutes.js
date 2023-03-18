import express from "express";
import { v2 as cloudinary } from "cloudinary";
import { Router } from "express";

import Post from "../mongodb/models/post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello From DALL-E Backend!");
});

export default router;
