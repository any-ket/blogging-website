import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

//components
import Connection from "./database/db.js";
import Router from "./routes/route.js";
import { authenticateToken } from "./controller/jwt-controller.js";

dotenv.config();

const app = express();



app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);



const PORT = 8000;

Connection();

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
