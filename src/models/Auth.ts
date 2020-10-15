import mongoose, { modelNames } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    minlength: [6, "name must be at least 6 chars"],
    max: [10, "name must be at most 10 chars"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

// validation and save password

userSchema.pre("save", async function (next) {
  var userModel = this;
  console.log("here");
  if (!this.isModified("password")) return next();
  await bcrypt.genSalt(10, async (err, salt) => {
    if (err) return next(err);
    await bcrypt.hash(userModel.get("password"), salt, (err, hash) => {
      if (err) return next(err);
      this.set("password", hash);
      next();
    });
  });
});

const User = mongoose.model("User", userSchema);
export default User;
