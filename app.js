import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./server.js";
import { activiteRouter } from "./Routes/activites.route.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json())

app.use('/api', activiteRouter)

const PORT = 8000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running at PORT: ", PORT);
  });
});
