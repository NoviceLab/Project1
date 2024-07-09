import express, { Request, Response } from "express";
import cors from "cors";
import dbconnect from "./utils/dbconnect";
import dotenv from "dotenv";
import BookingRoutes from "./routes/BookingRoutes";
import AuthRoutes from "./routes/AuthRoutes"
dotenv.config();
const app = express();
const port = 3000;

dbconnect();

app.use(express.json());
app.use(cors());
app.use("/api/v1/bookings", BookingRoutes);
app.use("/api/v1/auth", AuthRoutes)

app.get("/", function (req, res) {
  res.json({
    msg: "hello world!",
  });
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
