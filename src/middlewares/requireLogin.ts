import { NextFunction } from "express";
import jwt, { VerifyErrors } from "jsonwebtoken";
import User from "../models/Auth";

const requireLogin = (req: any, res: any, next: NextFunction) => {
  const { authrization } = req.headers;
  if (!authrization)
    return res.status(401).json({
      status: "Failed",
      error: "Forbidden! Please log in ",
    });

  const verifyToken = authrization.replace("Bearer ", "");
  jwt.verify(
    verifyToken,
    process.env.JWTSECRET || "",
    (err: any, payload: any) => {
      if (err) {
        return res.status(401).json({
          error: "Forbidden! Please logg in",
        });
      }
      // const user = payload;
      // console.log(user);
      const { _id } = payload;
      User.findById(_id).then((currentUser) => {
        req.user = currentUser;
        next();
      });
    }
  );
};

export default requireLogin;
