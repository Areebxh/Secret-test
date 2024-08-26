const Users = require('../models/userModel')
const Feedback = require("../models/feedbackModel")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('./emailController')


const { google } = require('googleapis')
const { OAuth2 } = google.auth
const fetch = require('node-fetch')

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID)

const { CLIENT_URL } = process.env


const getUserInfo = async (req, res) => {
  try {
    const user = await Users.findById(req.userId).select('-password')

    res.json(user)
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}


const submitFeedback = async (req, res) => {
  try {
    const { feedback } = req.body;
    const userId = req.userId; // Assuming userId is available in the request object after authentication

    // Create a new feedback document
    const newFeedback = new Feedback({
      userId,
      feedback
    });

    // Save the feedback to the database
    await newFeedback.save();

    res.status(201).json({ msg: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ msg: "An error occurred while submitting feedback" });
  }
};


const logout = async (req, res) => {
  try {
    res.clearCookie('refreshtoken', { path: '/user/refresh_token' })
    return res.json({ msg: "Logged out." })
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const { email, phone, avatar, userId } = req.body
    console.log("hahahhahahah", req.body)

    await Users.findOneAndUpdate({ _id: userId }, {
      email, phone, avatar
    })

    res.json({ msg: "Update Success!" })
  } catch (err) {
    return res.status(500).json({ msg: err.message })
  }

}

const getUsers = async (req, res) => {
  const result = await Users.find({}, { _id: 0 })
    .then((response) => {
      res.send(response);
    })
    .catch({ message: "error" });
};

const deleteUser = async (req, res) => {
  const result = await Users.deleteOne({
    userid: req.body.userid,
  });
  if (result.deletedCount == 1) {
    console.log("User deleted");
  } else {
    console.log("User not found");
  }
  res.send({ status: result });
};

const blockUser = async (req, res) => {
  await Users.updateOne({ userid: req.body.userid }, { isBlock: true })
    .then((response) => {
      console.log(response);
      res.send({ blocked: response.modifiedCount });
    })
    .catch((err) => {
      res.send(err);
    });
};

const unBlockUser = async (req, res) => {
  await Users.updateOne({ userid: req.body.userid }, { isBlock: false })
    .then((response) => {
      console.log(response);
      res.send({ unblocked: response.modifiedCount });
    })
    .catch((err) => {
      res.send(err);
    });
};







module.exports = { getUserInfo, updateUser, logout, getUsers, deleteUser, blockUser, unBlockUser, submitFeedback };