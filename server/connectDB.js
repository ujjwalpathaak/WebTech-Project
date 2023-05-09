import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
// const uri = "mongodb+srv://ujjwalpathaak:<password>@cluster0.szcuahe.mongodb.net/?retryWrites=true&w=majority";
const Connection = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb+srv://ujjwalpathaak:ujju2002@cluster0.szcuahe.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true });
    console.log("database connected");
  } catch (error) {
    console.log("error connecting to database", err.message);
  }
};

export default Connection;
