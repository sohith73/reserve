import mongoose from "mongoose";
import validator from "validator";
import { sendTable } from "../MAIL/sendEmail.js";
import { sendToOwner } from "../MAIL/sendEmail.js";
import { maleSender } from "../MAIL/sender.js";
const reservationSchema = new mongoose.Schema({
     firstName: {
          type: String,
          required: true,
          minLength: [3, "First name must be of at least 3 Characters."],
          maxLength: [30, "First name cannot exceed 30 Characters."],
     },
     lastName: {
          type: String,
          required: true,
          minLength: [3, "Last name must be of at least 3 Characters."],
          maxLength: [30, "Last name cannot exceed 30 Characters."],
     },
     date: {
          type: String,
          required: true,
     },
     time: {
          type: String,
          required: true,
     },
     email: {
          type: String,
          required: true,
          validate: [validator.isEmail, "Provide a valid email"],
     },
     phone: {
          type: String,
          required: true,
          minLength: [10, "Phone number must contain 10 Digits."],
          maxLength: [10, "Phone number must contain 10 Digits."],
     },
});

async function sendVerificationEmail(email, Name, Time) {
     try {
          const mailResponse = await maleSender(
               email,
               "Your Table Is ready ",
               sendTable(Name, Time)
          );
          console.log("Email sent successfully: ", mailResponse.response);
     } catch (error) {
          console.log("Error occurred while sending email: ", error);
          throw error;
     }
}
async function sendVerificationEmailToOwner(Time) {
     try {
          const mailResponse = await maleSender(
               "sohith73@gmail.com",
               "Table got eyes ",
               sendToOwner(Time)
          );
          console.log("Email sent successfully: ", mailResponse.response);
     } catch (error) {
          console.log("Error occurred while sending email: ", error);
          throw error;
     }
}

reservationSchema.pre("save", async function (next) {
     await sendVerificationEmail(this.email, this.firstName, this.time);
     await sendVerificationEmailToOwner(this.time);
     next();
})

export const Reservation = mongoose.model("Reservation", reservationSchema);
