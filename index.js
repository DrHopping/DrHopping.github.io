var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var firebase = require('firebase')
const admin = require('firebase-admin')
//let serviceAccount = require('serviceAccountKey.json')
//admin.initializeApp({
//	credential: admin.credential.cert('serviceAccountKey.json')
//});
//let db = admin.database();

app.use(express.static(__dirname + 'public'));
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json());

var config = {
	apiKey: "AIzaSyDvAVQeXXHcXsKGiyOlVvsVnMl3PTHJDvw",
	authDomain: "firstproj-62dca.firebaseapp.com",
	databaseURL: "https://firstproj-62dca.firebaseio.com",
	projectId: "firstproj-62dca",
	storageBucket: "firstproj-62dca.appspot.com",
	messagingSenderId: "817127971580",
	appId: "1:817127971580:web:3822e917cbe1ed2edc5579"
};
firebase.initializeApp(config)
const db = firebase.database();

var ref = db.ref('scores');
ref.on('value', snap => {
	data = snap.val()
});
let data;


app.get('/index', function (req, res) {
	var a = 0;
	res.render('index.html', {
		a: a
	});
})

app.get('/test', (req, res) => {
	res.render('test.html', {
		scores: getRecords(data),
		ref: ref
	});
})

app.post('/test', (req, res) => {
	addScore(req.body.name, req.body.score)
	res.redirect('/test')
})

app.listen(3000, function () {
	console.log('Listening on port 3000')
})

const getRecords = (data) => {
	var keys = Object.keys(data)
	console.log(data)
	let scores = [];
	keys.forEach(key => {
		scores.push(data[key]);
	});
	return scores;
}
const addScore = (name, score) => {
	var ref = db.ref('scores');
	var data = {
		name: name,
		score: score
	}
	ref.push(data);
}