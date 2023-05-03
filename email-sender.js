const nodemailer = require('nodemailer');

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'your_email_service_provider',
  auth: {
    user: 'your_email_address',
    pass: 'your_email_password',
  },
});

// Define the email options
const mailOptions = {
  from: 'your_email_address',
  to: 'your_email_address',
  subject: 'Test Email',
  text: 'Hello, this is a test email sent using Node.js and nodemailer!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
