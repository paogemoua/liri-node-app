// Include all NPM packages
var spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require("moment");
var dotnev = require("dotenv").config();

// node-spotify-api
var spotify = new spotify({
    id: f69f858672c44180929350913474e5c5,
    secret: e9a9803943944ff7a1879189b755f234
});

spotify.search({ type: 'track', query: 'All the Small Things'}, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});

// axios
var axios = require("axios");

var nodeArgs = process.argv;

var movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }
    else {
        movieName += nodeArgs[i];
    }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);

axios.get(queryUrl).then(
    function(response) {
        console.log("Release Year: " + response.data.Year);
    }
);

// moment
var moment = require('moment');
moment().format();

// dotenv (?)
