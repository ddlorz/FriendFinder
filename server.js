//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


//Express app
var app = express();
var PORT = 3000;

//Middleware bodyparser setup
app.use(bodyParser.json());
/*app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));*/

//Set of friends
var people = [
    {
        name: 'John Demoya',
        photo: 'www.google.com',
        scores: ['5','5','5','5','5','5','5','5','5','5',]
    },
    {
        name: 'Elton John',
        photo: 'www.google.com',
        scores: ['4','4','4','4','4','4','4','4','4','4',]
    },

];

//Routing
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'app/public/home.html'))
});

require('./app/routing/htmlRoutes')(app, __dirname);
require('./app/routing/apiRoutes')(app, people);

//Starts the server to listening
app.listen(PORT, function() {
    console.log('Listening to PORT ' + PORT);
})
