import nodemailer from 'nodemailer'

const toEmail = process.env.TO_EMAIL
const email = process.env.EMAIL
const pass = process.env.PASSWORD

export const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: email,
    pass
  },
  tls: {
    ciphers: 'SSLv3'
  }
});


export const mailOptions = {
  from: email,
  to: toEmail
}