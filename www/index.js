/* global cordova:false */

/*!
 * Module dependencies.
 */

var exec = cordova.require('cordova/exec');

var MediaPlayer = {

    play: function(success, failure) {
        exec(success, failure, "MediaPlayer", "play", []);
    },

    pause: function(success, failure) {
        exec(success, failure, "MediaPlayer", "pause", []);
    },

    playURL: function(urlString, songTitle, albumTitle, artistName, imgUrl, success, failure) {
        exec(success, failure, "MediaPlayer", "playURL", [urlString, songTitle, albumTitle, artistName, imgUrl]);
    },
    addNextURL: function(success, failure) {
        exec(success, failure, "MediaPlayer", "addNextURL", [urlString]);
    },
    playNext: function(success, failure) {
        exec(success, failure, "MediaPlayer", "playNext", []);
    },
    ended: function() {
        console.log('Playlist ended')
    },
    clear: function(success, failure) {
        //clear the queue
        exec(success, failure, "MediaPlayer", "clear", []);
    },
    fadeIn: function() {
        exec(success, failure, "MediaPlayer", "fadeIn", []);
    },
    fadeOut: function() {
        exec(success, failure, "MediaPlayer", "fadeOut", []);
    },

};

module.exports = MediaPlayer;