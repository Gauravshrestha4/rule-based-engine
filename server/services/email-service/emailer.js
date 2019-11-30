const nodemailer = require("nodemailer");

const emailer = userEmail => {
  let tranporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: "abc@gmail.com",
      pass: "abcd"
    }
  });

  let mailOptions = {
    from: "abcd@gmail.com",
    to: userEmail,
    subject: "Your Daily Rule Status",
    html:
      "<p>Hi, <br> You Rule has been stopped for today.<br> Regards, <br>Rule Engine<p>"
  };

  tranporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Some Error occurred in sending mail ..!!");
    }
    console.log("Email successfully sent ..!!");
  });
};

module.exports = emailer;
