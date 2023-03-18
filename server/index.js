import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import dalleRoutes from "./routes/dalleRoutes.js";
import postRoutes from "./routes/postRoutes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/dalle", dalleRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello From DALL-E Backend!");
});

app.listen(process.env.PORT || 3000, () => {
  connectDB(process.env.MONGO_URI);
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
