import express from "express";


import upload from "../middlewares/multer.js";
import { getProfile, loginUser, registerUser } from "../controller/userController.js";
import authAdnin from "../middleware/Auth.js";
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/get-profile", authAdnin, getProfile);

userRouter.post(
  "/update-profile",
  upload.single("image"),
  authUser,
  updateProfile
);

export default userRouter;
