dotenv.config();
import dotenv from "dotenv";
import express from "express";
const app = express();

import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/routes.js";
import Connection from "./connectDB.js";

var PORT = process.env.PORT || 8080;

// Using cors
app.use(cors());

// Connecting Database
Connection();

// Declaring Routes
app.use("/", router);

// Misc
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
