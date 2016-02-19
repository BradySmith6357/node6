// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var videos = [
	// {
	// 	name : "Brady",
	// 	url : "//www.youtube.com/embed/g708PmJAbuI",
	// 	title : "Deadpool v Boba Fett",
	// 	description : "Two of the universes biggest mercenaries go head to head",
	// 	votes : 0
	// }
]

// Routes \\
app.get("/", function(req, res){
	res.sendFile("home.html", {root : __dirname + "/public/html"})
});

// This should take user to subissions page
app.get("/submits.html", function(req, res){
	res.sendFile("submits.html", {root : __dirname + "/public/html"})
})

app.get("/api/videos", function(req, res){
	res.send(videos)
})

app.post("/api/videos", function(req, res){
	if(videos.length < 8){
	videos.push({
		name: req.body.name,
		url: req.body.url,
		title: req.body.title,
		description: req.body.description,
		votes: 0
	})

	res.send(videos)
// Working on having the else show my ng-show.
} else {

}
})


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})