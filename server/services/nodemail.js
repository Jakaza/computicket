const nodemailer = require("nodemailer");

const template = require('../config/template');

const keys = require('../config/keys');
const { host ,port , user, sender , password } = keys.nodemailer;

const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: user,
      pass: password,
    },
  });


exports.sendEmail = async (email, host,  type, data) => {
    try {
      const message = prepareTemplate(type, host , data);
  
      const config = {
        from: `MERN Computicket! <${sender}>`,
        to: email,
        subject: message.subject,
        text: message.text
      };

      const info = await transporter.sendMail(config);

      console.log(info);
      
      
    } catch (error) {
      return error;
    }
  };


  const prepareTemplate = (type, host, data) => {
    let message;
  
    switch (type) {
      case 'reset':
        message = template.resetEmail(host, data);
        break;
  
      case 'reset-confirmation':
        message = template.confirmResetPasswordEmail();
        break;
  
      case 'signup':
        message = template.signupEmail(data);
        break;
  
      case 'merchant-signup':
        message = template.merchantSignup(host, data);
        break;
  
      case 'merchant-welcome':
        message = template.merchantWelcome(data);

      case 'order-confirmation':
        message = template.orderConfirmationEmail(data);
        break;
  
      default:
        message = '';
    }
  
    return message;
  };
