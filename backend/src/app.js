import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connect from "./config/connect.js";
import UserAPI from "./routes/user.js";
import TodoAPI from "./routes/task.js";

dotenv.config();

const app = express();
connect();

app.use(cors());
app.use(express.json());

app.use("/api/v1", UserAPI);
app.use("/api/v2", TodoAPI);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
