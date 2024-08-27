const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const passport = require('passport');

const auth = require('../../middleware/auth');

// Bring in Models & Helpers
const User = require('../../models/user');
// const mailchimp = require('../../services/mailchimp');
// const mailgun = require('../../services/mailgun');
const keys = require('../../config/keys');
const { EMAIL_PROVIDER, JWT_COOKIE } = require('../../constants');

const { secret, tokenLife } = keys.jwt;

router.get('/testing', async (req, res) => {



  res.status(200).json({
    success: true,
    messgae: "It is finally working....",
    body: req.body
  });
})

router.post('/register', async (req, res) => {
  try {
    const { username,  email, firstName, lastName, password } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: 'You must enter an email address.' });
    }

    if (!firstName || !lastName) {
      return res.status(400).json({ error: 'You must enter your full name.' });
    }

    if (!password) {
      return res.status(400).json({ error: 'You must enter a password.' });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: 'That email address is already in use.' });
    }

    const user = new User({
      username,
      email,
      password,
      firstName,
      lastName
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
    const registeredUser = await user.save();

    const payload = {
      id: registeredUser.id
    };

    // await mailgun.sendEmail(
    //   registeredUser.email,
    //   'signup',
    //   null,
    //   registeredUser
    // );

    const token = jwt.sign(payload, secret, { expiresIn: tokenLife });

    res.status(200).json({
      success: true,
      token: `Bearer ${token}`,
      user: {
        username: registeredUser.username,
        id: registeredUser.id,
        firstName: registeredUser.firstName,
        lastName: registeredUser.lastName,
        email: registeredUser.email,
        role: registeredUser.role
      }
    });
  } catch (error) {
      console.log(error);


    res.status(400).json({
      error: 'Your request could not be processed. Please try again.'
    });


  }
});


module.exports = router;