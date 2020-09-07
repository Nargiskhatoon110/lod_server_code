var express = require('express');
var router = express.Router();
const fs = require('fs');

let server = require('http');
let svr, port = 1234;

let keyword = fs.readFileSync('./routes/GraphListInfo.json');
let graphListData = JSON.parse(keyword);

let graph = fs.readFileSync('./routes/GraphInfo.json');
let graphData = JSON.parse(graph);

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization");
	res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
	res.header("Access-Control-Max-Age", 3600);
	next();
})

router.get('/graphs', (req, res) => {
	//   data = 'testsetse'
	return res.json(data);
})

router.get('/graphList', (req, res) => {
	//   data = 'testsetse'
	res.send(graphListData);
})

router.get('/graph', (req, res) => {
	//   data = 'testsetse'
	res.send(graphData);
})

module.exports = router;
