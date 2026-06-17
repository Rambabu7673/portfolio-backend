import express from "express";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import dns from "dns";
import addRoute from "./routes/addRoute.js";
import addContactRoute from "./routes/addContactRoute.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(
  cors({
    origin: process.env.FRONTEND_URI,
    credentials: true,
  }),
);
console.log("Frontend Url hai =", process.env.FRONTEND_URI);

app.use("/api/add", addRoute);
app.use("/user/api", addContactRoute);

// Home Route
app.get("/", (req, res) => {
  res.json({ message: "This is Personal Portfolio" });
});
// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Portfolio",
  })
  .then(() => console.log("MongoDB  is Connected successfully...!"))
  .catch((err) => console.log(err));

// Server Port
const Port = 2000;

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
