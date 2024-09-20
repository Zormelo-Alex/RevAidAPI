import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";
import { db } from "./database.js";
import {
  auth,
  owners,
  divisions,
  zones,
  locality,
  gcrcodes,
  billboards,
  datareq,
  revenue,
  bills,
} from "./routes/index.js";

db.getConnection((err, connection) => {
  if (!err) return console.log("database connected");
  return console.log("database couldn't connect...", err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "rev",
    resave: true,
    saveUninitialized: false,
  })
);
app.use(cors());

app.use("/api/auth", auth);
app.use("/api/owners", owners);
app.use("/api/divisions", divisions);
app.use("/api/zones", zones);
app.use("/api/locality", locality);
app.use("/api/gcrcodes", gcrcodes);
app.use("/api/billboards", billboards);
app.use("/api", datareq);
app.use("/api/revenue", revenue);
app.use("/api/bills", bills);

app.get("/api/healthCheck", (req, res) => {
  res.status(200).send({
    message: "Revenue_Aid API service is up and running...",
    author: "CERVELLO, DOM",
  });
  console.log(`Route: ${req.method} ${req.originalUrl}`);
});

app.listen("8000", () => {
  console.log("Revenue_Aid API port open at port 8000");
});
