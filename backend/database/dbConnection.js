import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect('mongodb+srv://sohith73:8008398899@cluster0.gi5jhsu.mongodb.net/resApp?retryWrites=true&w=majority', {
      dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};
