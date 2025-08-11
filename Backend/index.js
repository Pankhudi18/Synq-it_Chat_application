import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js"
import messageRoute from "./routes/message.route.js"
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 9000;
const URI = process.env.MONGODB_URI;

try {
  await mongoose.connect(URI).then(console.log("MongoDB Connected"));
} catch (error) {
  console.log(error);
}

app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.use("/api/user", userRoute);

app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
