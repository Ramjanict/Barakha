import express from "express";

import {
  getProfile,
  loginUser,
  signup,
  updateProfile,
} from "../controller/userController.js";
import auth from "../Middleware/Auth.js";

const adminRouter = express.Router();

adminRouter.post("/signup", signup);
adminRouter.post("/login", loginUser);
adminRouter.get("/user", auth, getProfile);

export default adminRouter;
