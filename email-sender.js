const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransporter({
  service: 'gmail', // You can use other services like 'yahoo', 'outlook', etc.
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-app-password' // Replace with your app password (not regular password)
  }
});

// Email configuration
const mailOptions = {
  from: 'your-email@gmail.com', // Replace with your email
  to: 'your-email@gmail.com', // Replace with your email (sending to yourself)
  subject: 'Test Email from Node.js',
  text: 'Hello! This is a test email sent from Node.js using nodemailer.',
  html: '<h1>Hello!</h1><p>This is a test email sent from <strong>Node.js</strong> using nodemailer.</p>'
};

// Function to send email
function sendEmail() {
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:', error);
    } else {
      console.log('Email sent successfully!');
      console.log('Message ID:', info.messageId);
    }
  });
}

// Call the function to send email
sendEmail();
