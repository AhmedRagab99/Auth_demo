import { string } from "@hapi/joi";
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    default: "test post",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  created_at: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", postSchema);
export default Post;
