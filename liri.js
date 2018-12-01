// read and set any environment variables with the dotenv package
require("dotenv").config();

// use the require keyword to import
var key = require("./keys.js");
var fs = require("fs");
var request = require("request");
var Spotify = require("node-spotify-api");
var axios = require("axios");

var command = process.argv[2];
var userInput = process.argv[3];

// switch command - trigger specified function
switch (command) {
    case 'concert-this':
        getConcert();
        break;
    case 'spotify-this-song':
        showSongInfo();
        break;
    case 'movie-this':
        showMovieInfo();
        break;
    case 'do-what-it-say':
        doWhatItSays();
        break;
    default:
        console.log("Error: please type in the proper command.")
        break;
};

// when command is "concert-this" - will run this function
function getConcert() {
    var nodeArgs = process.argv;

var artistName = "";

for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {
        artistName = artistName + "+" + nodeArgs[i];
    }
    else {
        artistName += nodeArgs[i];
    }
}

var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp";

console.log(queryUrl);

axios.get(queryUrl).then(
    function(response) {
        console.log("Venue: " + response.venue.name);
        // console.log("Address: " + response.); // How to gather address info?
        console.log("Date of the event: " + response.datetime);

// when command is "spotify-this-song" - will run this function
function showSongInfo() {
    var spotify = new Spotify(key.spotify);

    spotify.search({type: 'track', query: userInput}, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(
            "Artist: " + data.tracks.items[0].artists[0].name +
            "\nSong's Name: " + data.tracks.items[0].name +
            "\nPreview Link of the Song: " + data.tracks.items[0].preview_url +
            "\nAlbum the Song is From: " + data.tracks.items[0].album.name
        );
    });
};

// when command is "movie-this" - will run this function
function showMovieInfo() {
    request("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(
                "Title of the Movie: " + JSON.parse(body).Title +
                "\nYear: " + JSON.parse(body).Year +
                "\nIMBD Rating: " + JSON.parse(body).imdbRating +
                "\nRotten Tomatoes Rating: " + JSON.parse(body).Ratings[1] +
                "\nCountry: " + JSON.parse(body).Country +
                "\nLanguage: " + JSON.parse(body).Language +
                "\nPlot: " + JSON.parse(body).Plot +
                "\nActors: " + JSON.parse(body).Actors +
                "\n---------------------------------------------------------\n"
            );
        };
    });
};

// when command is "do-what-it-say" - will run this function
function doWhatItSays() {
    var spotify = new Spotify(key.spotify);
    // Read file in random.txt
    fs.readFile("random.txt","utf8", function (error, data) {
        // Log error
        if (error) {
            return console.log(error);
        }

        var dataAr = data.split(".");
        // ""
        if (dataArr[0] --- "concert-this") {
            userInput = dataArr[1].slice(1,-1);
            
        }
        // "spotify-this-song"
        else if (dataArr[0] === "spotify-this-song") {
            userInput = dataArr[1].slice(1,-1);
            showSongInfo();
        }
        // "movie-this"
        else if (dataArr[0] === "movie-this") {
            userInput = dataArr[1].slice(1,-1);
            showMovieInfo();
        }
});