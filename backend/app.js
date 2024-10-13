import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();
dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions ={
    origin:'http://localhost:5173', 
    // origin :"https://frontendv1-skhc.com",
    credentials:true,            
    //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use("/api/v1/reservation", reservationRouter);
app.get("/", (req, res, next)=>{return res.status(200).json({
  success: true,
  message: "HELLO WORLD"
})})

dbConnection();

app.use(errorMiddleware);

export default app;
