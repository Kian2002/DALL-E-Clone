import express from "express";
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
