import express, { request, response } from 'express';
import tasksRoute from "./routes/tasksRouters.js"
import { connectDB } from './config/db.js';
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();



app.use(express.json());

app.use("/api/tasks", tasksRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server bắt đầu trên cổng ${PORT}`);
  })
});


