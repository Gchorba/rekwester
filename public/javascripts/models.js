function Tweet(username, message, datetime){
	this.username = username;
	this.message = message;
	this.datetime = datetime;
}

//formats song data into object for easier manipulation

function Song(trackObj) {
	this.trackName = trackObj.name;
	this.trackURI = trackObj.href;

	this.listOfArtists = [];

	this.artist = trackObj.artists[0].name;
	this.artistUri = trackObj.artists[0].href;
}