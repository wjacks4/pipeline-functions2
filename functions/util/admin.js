const admin = require('firebase-admin');

var serviceAccount = require("./pipeline-a3be1-firebase-adminsdk-9f383-6201077f79.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pipeline-a3be1.firebaseio.com"
});

// admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };