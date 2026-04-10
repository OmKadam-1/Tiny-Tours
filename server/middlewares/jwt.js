import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();            

const checkJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      success: false,
      message: "Token missing",
    });
  }

  const [bearer, token] = authHeader.split(" ");

  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({
      success: false,
      message: "Invalid token format",
    });
  }