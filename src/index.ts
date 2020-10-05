import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import AuthRoutes from "./routes/AuthRoutes";
const app = express();

app.get("/about", (req, res) => {
  res.send("welcome to our site");
});
app.get("/", function (req, res) {
  res.send("<b>My</b> first express http server");
});

// On localhost:3000/welcome
app.get("/welcome", function (req, res) {
  res.send("<b>Hello</b> welcome to my http server made with express");
});

// middelware
app.use(morgan("dev"));
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/auth", AuthRoutes);
mongoose.connect(
  process.env.MONGOURI || "",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to data base ");
  }
);

app.listen(process.env.PORT, () => {
  console.log(`server running with port ${process.env.PORT}`);
});
