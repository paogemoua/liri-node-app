require("dotenv").config();

var spotify = new Spotify(keys.spotify);

// concert-this :: This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:
// name of the venue, venue location, date of the event (use moment to format this as "MM/DD/YYYY")
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
        console.log(response);
    }
);

// spotify-this-song :: This will show the following information about the song in your terminal/bash window:
// artist(s), the song's name, a preview link of the song from Spotify, the album that the song is from

// movie-this :: This will output the following information to your terminal/bash window:
// title, year, IMDB rating, rotten tomatoes rating, country, language, plot, actors
// default :: 'Mr. Nobody'

// do-what-it-says
// LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands
// run spotify-this-song for "I Want It That Way" as follows the text in random.txt; edit the text in random.txt to test out the feature for movie-this and concert-this

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
