import ApiRouter from './routes/v1'
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const admin = require('firebase-admin')
const configuration = require('./configuration/firebase')
const serviceAccount = require('./configuration/firebase-adminsdk.json')

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: configuration.firebaseConfig.databaseURL
})

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database()
var ref = db.ref('restricted_access/secret_document')
ref.once('value', function (snapshot) {
  console.log(snapshot.val())
})

const app = express()
app.use(compression())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.use('/api/v1', ApiRouter)
app.get('/api/v1', (req, res) => {
  res.status(200).send({ name: 'DNAMutationAPI', apiVersion: 'v1' })
})

module.exports = app
