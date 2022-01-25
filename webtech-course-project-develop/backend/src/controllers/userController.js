const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userSchema.js');
require('dotenv').config();

const SALT_ROUNDS = 5; // cost factor

exports.getUsers = async (req, res) => {
  User.find()
  .populate('user')
  .exec((error, listUsers) => {
      if (error) {
          return res.status(500).json({ result: false, message: 'Cannot get user list', error });
      }
      return res.status(200).json({ result: true, user_list: listUsers });
  });
};

exports.findUser = async (email) => {
  return User.findOne({ email }).exec();
};

exports.createUser = async (req, res) => {
  const hashedPass = await bcrypt.hash(req.body.password, SALT_ROUNDS);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
    boughtWorkspaces: []
  });
  console.log(user);
  user.save().then(
    (createdUser) => {
        console.log('here');
        return res.json({ result: true, user: createdUser });
    }
  ).catch(
    (error) => {
        if (error.name === 'MongoError' && error.code === 11000) {
            return res.status(422).send({ result: false, message: 'User already exist!' });
        }
        return res.status(400).json({ result: false, message: 'Cannot create this user', error });
    }
);
};

exports.loginUser = async (req, res) => {
  User.findOne({ $or: [{ email: req.body.email }, { name: req.body.name }] })
  .populate('user')
  .exec(async (err, user) => {
      if (err) {
          return res.status(500).send();
      } if (user == null) {
          return res.json({ result: false, message: 'User not Found' });
      }
          const pass = await bcrypt.compare(req.body.password, user.password);
          if (pass) {
              const token = jwt.sign({
                  id: user.id,
                  name: user.name
              }, process.env.token_secret, {
                  expiresIn: '1h'
              });
              res.header('Access-Control-Allow-Origin', '*');
              return res.json({ result: true, user, token });
          }
              return res.json({ result: false, message: 'User not Found' });
  });
};
