var express = require('express');
var router = express.Router();
const fs = require('fs');

let server = require('http');
let svr, port = 1234;

let keyword = fs.readFileSync('./routes/storage/GraphListInfo.json');
let graphListData = JSON.parse(keyword);

let graph = fs.readFileSync('./routes/storage/GraphInfo.json');
let graphData = JSON.parse(graph);

let graphYatap_01 = fs.readFileSync('./routes/storage/yatap_01.json');
let graphDataYatap_01 = JSON.parse(graphYatap_01);

let ontology = fs.readFileSync('./routes/storage/ontologyResponse.json');
let ontologyData = JSON.parse(ontology);

let graphSearchXML = fs.readFileSync('./routes/storage/download.xml');
let graphSearchDataXML = graphSearchXML;

let graphSearch = fs.readFileSync('./routes/storage/GraphSearchList.json');
let graphSearchData = JSON.parse(graphSearch);

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

// router.get('/graphs', (req, res) => {
// 	//   data = 'testsetse'
// 	return res.json(data);
// })

// keyword: parking
// http://{{hostname}}/graphs?graphType=instance,ontology&keyword=parking&prefixFormat=simple&limit=100

router.get('/graphs', (req, res) => {
	//   data = 'testsetse'
	res.send(graphListData);
})

// selected LOD: parking:yatap_01
// http://{{hostname}}/graphs/parking:yatap_01?prefixFormat=normal&limit=10

router.get('/graphs/:graphName', (req, res) => {
	//   data = 'testsetse'

	//   data = 'testsetse'
	let regForDataProperty = /[A-Za-z]+:/;
	if(req.query.asFile === "true")
	res.send(graphSearchDataXML);
	else
	{
		if(!req.params.graphName.match(regForDataProperty))
		res.send(ontologyData);
	 else
	    // res.send(graphData); // GraphInfo.json
	    res.send(graphDataYatap_01);
	}
})

module.exports = router;
