var express = require('express')
var app = express()
const admin = require('firebase-admin');

admin.initializeApp({
	credential: admin.credential.applicationDefault()
});

const db = admin.firestore();

let docRef = db.collection('users').doc('alovelace');

let setAda = docRef.set({
	first: 'Ada',
	last: 'Lovelace',
	born: 1815
});

app.use(express.static('public'))

app.get('/', function (req, res) {
	res.sendfile('index.html')
})

app.listen(3000, function () {
	console.log('Listening on port 3000')
})