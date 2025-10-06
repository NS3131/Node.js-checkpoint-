// Task 5: Email Sender
// This program uses the 'nodemailer' package to send emails via SMTP

// Import the 'nodemailer' package (must be installed via npm install nodemailer)
const nodemailer = require('nodemailer');

// STEP 1: Create a transporter object using SMTP transport
// A transporter is responsible for sending emails through a specific service
const transporter = nodemailer.createTransporter({
  service: 'gmail', // You can use other services like 'yahoo', 'outlook', etc.
  auth: {
    user: 'your-email@gmail.com', // Replace with your actual Gmail address
    pass: 'your-app-password' // Replace with your Gmail app password (NOT your regular password)
  }
});

// STEP 2: Configure the email content
// This object contains all the email details
const mailOptions = {
  from: 'your-email@gmail.com', // Sender's email address
  to: 'your-email@gmail.com', // Recipient's email address (sending to yourself for testing)
  subject: 'Test Email from Node.js', // Email subject line
  text: 'Hello! This is a test email sent from Node.js using nodemailer.', // Plain text version
  html: '<h1>Hello!</h1><p>This is a test email sent from <strong>Node.js</strong> using nodemailer.</p>' // HTML version
};

// STEP 3: Function to send the email
function sendEmail() {
  // Use the transporter to send the email
  // sendMail() is an asynchronous function that takes mail options and a callback
  transporter.sendMail(mailOptions, (error, info) => {
    // Handle any errors that occur during sending
    if (error) {
      console.log('Error occurred:', error);
    } else {
      // If successful, display confirmation and message ID
      console.log('Email sent successfully!');
      console.log('Message ID:', info.messageId);
    }
  });
}

// STEP 4: Call the function to send the email
sendEmail();

// IMPORTANT SETUP NOTES:
// 1. Enable 2-Factor Authentication on your Gmail account
// 2. Generate an "App Password" in your Google Account settings
// 3. Replace 'your-email@gmail.com' with your actual Gmail address
// 4. Replace 'your-app-password' with the generated app password
// 5. Remove your personal information before uploading to GitHub!
