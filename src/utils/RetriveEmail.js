import emailTemplate from '../../email.template.js';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer'

dotenv.config()

const domainEmail = process.env.EMAIL
const password = process.env.PASSWORD
const domainPort = process.env.DOMAIN_PORT

const subject = 'Invoice'

const emailConfig = {
  host: 'mail.trademark-gov.us',
  port: domainPort,
  auth: {
    user: domainEmail,
    pass: password,
  },
  tls: {
    rejectUnauthorized: false,
  },
  secure: process.env.domainPort,
};


async function sendEmail(prop = { customerEmail: 'john.smith@gmail.com', customerName: "John Smith", message: "Hello john 😊!", sessionId: "pi_1234567890", logo: "xxxxxxx" }) {
  const { customerEmail, customerName, message, sessionId, logo } = prop;

  const template = emailTemplate({ name: customerName, email: customerEmail, message, sessionId, logo })
  const transporter = nodemailer.createTransport(emailConfig);

  const mailOptions = {
    from: '"Vehware" <info@trademark-gov.us>',
    to: customerEmail,
    subject: subject,
    // text: template,
    html: template,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully', info);
    return { data: info, success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { message: error.message || 'Unknown error', success: false };
  }
}


export { sendEmail }
