import { db } from "../database.js";
import jwt from "jsonwebtoken";
// import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt";

// export const prisma = new PrismaClient()

export const queryAsync = (sql, values) => {
  try {
    return new Promise((resolve, reject) => {
      db.query(sql, values, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const authenticateToken = (req, res, next) => {
  console.log(`Route: ${req.method} ${req.originalUrl}`);

  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader && authorizationHeader.split(" ")[1];

  if (!token) return res.status(401).send("token not found");
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send({ message: "Please login..." });
    req.user = user;

    next();
  });
};

export const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  // return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
  //     expiresIn: '60m',
  // })
} 

export const hashUserPassword = async (password) => {
  const saltRounds = 10;
  try {
    const hashed = await bcrypt.hash(password, saltRounds);
    return hashed;
  } catch (error) {
    return error;
  }
};

export const comparePassword = async (password, hash) => {
  try {
    const authenticate = await bcrypt.compare(password, hash);
    return authenticate;
  } catch (error) {
    return error;
  }
};
