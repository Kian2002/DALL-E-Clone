import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongoDB/connect.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Hello From DALL-E Backend!");
});

app.listen(process.env.PORT || 3000, () => {
  connectDB(process.env.MONGO_URI);
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
