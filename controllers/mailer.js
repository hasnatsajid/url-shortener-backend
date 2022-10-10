const nodemailer = require('nodemailer');

const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: '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',
    },
  })
);

const sendEmail = (req, res, next) => {
  const { name, email, message } = req.body;

  transporter
    .sendMail({
      to: email,
      from: 'dev.hassuu@gmail.com',
      subject: 'Hassuu URL Shortener',
      html: message,
    })
    .then((result) => {
      return res.status(200).json({ status: true, message: 'Message sent successfully :)' });
    })
    .catch((e) => {
      console.log(e);
      return res.status(500).json({ status: false, message: 'Message sending failed ;(' });
    });
};

module.exports = sendEmail;
