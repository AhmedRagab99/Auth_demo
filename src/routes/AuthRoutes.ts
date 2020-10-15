import express from "express";
import jwt from "jsonwebtoken";
import Auth from "../controller/AuthController";
import requireLogin from "../middlewares/requireLogin";
import createPost from "../controller/PostController";
const AuthRoutes = express.Router();

AuthRoutes.post("/register", Auth.signUp);

AuthRoutes.post("/login", Auth.signIn);

export default AuthRoutes;
