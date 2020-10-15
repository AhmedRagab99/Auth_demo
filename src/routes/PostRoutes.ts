import express from "express";
import requireLogin from "../middlewares/requireLogin";
import posts from "../controller/PostController";
const PostRoutes = express.Router();

PostRoutes.post("/create").use(requireLogin, posts.createPost);

export default PostRoutes;
