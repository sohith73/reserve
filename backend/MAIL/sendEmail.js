function generateRandomNumber() {
  return Math.floor(Math.random() * 16) + 1;
}
const randomNumber = generateRandomNumber();
export const sendTable = (Name, Time) => {
  const num = generateRandomNumber();
  const op = randomNumber; return `
     <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CheckInnEase Reservation Confirmation</title>
  <style>
    /* Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    /* Global Styles */
    body {
      font-family: 'Roboto', sans-serif;
      background-color: #f5f5f5;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #333;
      margin-top: 0;
    }
    p {
      color: #555;
      margin-bottom: 20px;
    }
    .button {
      display: inline-block;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;
    }
    .footer {
      margin-top: 30px;
      color: #777;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Reservation Confirmation</h1>
    <p>Dear ${Name},</p>
    <p>Your reservation at CheckInnEase has been confirmed!</p>
    <p>Your table number is: <strong>${op}</strong></p>
    <p>Your Time is: <strong>${Time}</strong></p>
    <p>We look forward to welcoming you at our restaurant. If you have any questions or need to make changes to your reservation, feel free to contact us.</p>
    <a href="#" class="button">Visit Our Website</a>
    <p class="footer">This email was sent from CheckInnEase. © 2024 CheckInnEase. All rights reserved By BSC.co.In.</p>
  </div>
</body>
</html>
`;
}

export const sendToOwner = ( Time) => {
  const op = randomNumber; 
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CheckInnEase Reservation Received</title>
<style>
 /* Fonts */
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

 /* Global Styles */
 body {
   font-family: 'Roboto', sans-serif;
   background-color: #f5f5f5;
   padding: 20px;
 }
 .container {
   max-width: 600px;
   margin: 0 auto;
   background-color: #fff;
   border-radius: 8px;
   padding: 30px;
   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 }
 h1 {
   color: #333;
   margin-top: 0;
 }
 p {
   color: #555;
   margin-bottom: 20px;
 }
 .button {
   display: inline-block;
   background-color: #007bff;
   color: #fff;
   text-decoration: none;
   padding: 10px 20px;
   border-radius: 5px;
 }
 .footer {
   margin-top: 30px;
   color: #777;
   font-size: 14px;
 }
</style>
</head>
<body>
<div class="container">
 <h1>Reservation Received </h1>
 <p>Hi sohith you got an Reservation,</p>
 <p>Your Hurry up and clean it!</p>
 <p>Reserved table number is: <strong>${op}</strong></p>
 <p>Reserved Time is: <strong>${Time}</strong></p>
 <p>Give them a best experience </p>
 <a href="#" class="button">Say NO!</a>
 <p class="footer">This email was sent from CheckInnEase. © 2024 CheckInnEase. All rights reserved By BSC.co.In.</p>
</div>
</body>
</html>
`;
}