//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var people = require('./app/data/people')

var peopleList = people(null);
//Express app
var app = express();
var PORT = 3000;

//Middleware bodyparser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

//Set of friends

//Routing
require('./app/routing/htmlRoutes')(app, __dirname);
require('./app/routing/apiRoutes')(app, people());

app.post('/api/friends', function(req, res) {
    console.log(req.body);
    var user = req.body;
    var scoreDiff = [];
    var bestFriend = 0;       

    for (var i = 0; i < peopleList.length; i++) {
        var sum = 0;
        for (var x in peopleList[i].scores) {
            sum = sum + Math.abs(parseInt(user.scores[x]) - parseInt(peopleList[i].scores[x]));
        }
        scoreDiff.push(sum);
        if ((i > 0) && (scoreDiff[i-1]>scoreDiff[i])) {
            bestFriend = i;
        }
    }
    //console.log(scoreDiff);
    //console.log(bestFriend);
    people(user);
    res.json(peopleList[bestFriend]);
});

//Starts the server to listening
app.listen(PORT, function() {
    console.log('Listening to PORT ' + PORT);
})
