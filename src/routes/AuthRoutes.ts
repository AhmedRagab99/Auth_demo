import express from "express";
import jwt from "jsonwebtoken";
import Auth from "../controller/AuthController";
import requireLogin from "../middlewares/requireLogin";
const AuthRoutes = express.Router();

AuthRoutes.post("/register", Auth.signUp);

AuthRoutes.post("/login", Auth.signIn);

AuthRoutes.get("/test").use(requireLogin, Auth.testPrivateRoutes);
export default AuthRoutes;
