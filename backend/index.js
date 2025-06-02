import express from "express";
import cors from "cors";
import connectDB from "./Config/mongobd.js";
import "dotenv/config";
import adminRouter from "./Routes/userRoutes.js";

//app config
const app = express();
const port = process.env.PORT || 4000;

//connect mongodb and cloudinary
connectDB();

// middleware
app.use(express.json());
app.use(cors());

app.use("/api/admin", adminRouter);
//endpoints
app.get("/", (req, res) => {
  res.send("Api Connected Successfully");
});
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
