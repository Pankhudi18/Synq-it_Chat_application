import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js"

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

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
