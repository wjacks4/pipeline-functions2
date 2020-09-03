const functions = require('firebase-functions');
const app = require('express')();
const cors = require('cors');
const { admin, db } = require('./util/admin');
const fbAuth = require('./util/fbAuth')
const { Expo } = require('expo-server-sdk');
const shortid = require('shortid');

const config = require('./util/config');

// //Import Firebase & config files, initialize the app. Why you can't do this like you can for admin...I have no idea
// const firebase = require('firebase');
// firebase.initializeApp(config)

// //THIS IS CRUCIAL - sets access-control-allow-origin header to *
// app.use(cors());

// Create a new Expo SDK client
const expo = new Expo();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
