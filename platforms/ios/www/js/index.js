/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        document.getElementById('playRemote').addEventListener('click', this.testSound);
        document.getElementById('pause').addEventListener('click', this.pauseSound);
        document.getElementById('play').addEventListener('click', this.playSound);
        document.getElementById('next').addEventListener('click', this.nextSound);
        document.getElementById('add').addEventListener('click', this.addURL);
        document.getElementById('clear').addEventListener('click', this.clear);
        document.getElementById('current').addEventListener('click', this.current);
        document.getElementById('playOtherRemote').addEventListener('click', this.testSound2);
        document.getElementById('fadeIn').addEventListener('click', this.fadeIn);
        document.getElementById('fadeOut').addEventListener('click', this.fadeOut);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    logTest: function () {
        console.log('check');
    },

    testSound: function () {
        console.log('startStream');

        var song = {
            id: '11',
            title: 'Let it in',
            album: 'Ashes',
            artist: 'Josh Woodward',
            file: 'https://www.joshwoodward.com/mp3/Ashes/JoshWoodward-Ashes-01-LetItIn.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/5/54/Public_image_ltd_album_cover.jpg'
        }

        var callbackFunc = function() {
            console.log('Song started');
        }

        cordova.plugins.audioPlayer.play(song, callbackFunc);
    },

    testSound2: function () {
        console.log('startStream2');

        var song = {
            id: '22',
            title: 'California Lullabye',
            album: 'The Beautiful Machine',
            artist: 'Josh Woodward',
            file: 'https://www.joshwoodward.com/mp3/JoshWoodward-TheBeautifulMachine-01-CaliforniaLullabye.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/5/54/Public_image_ltd_album_cover.jpg'
        }

        var callbackFunc = function() {
            console.log('Song Nr.2 started');
        }

        cordova.plugins.audioPlayer.play(song, callbackFunc);
    },

    pauseSound: function () {
        console.log('pause');

        var callbackFunc = function() {
            console.log('Playback paused');
        }

        cordova.plugins.audioPlayer.pause(callbackFunc);
    },

    playSound: function () {
        console.log('play');

        var callbackFunc = function() {
            console.log('Playback started');
        };
        cordova.plugins.audioPlayer.play();
    },

    nextSound: function () {
        console.log('next');

        var callbackFunc = function() {
            console.log('Next Song started');
        }
        cordova.plugins.audioPlayer.playNext();
    },

    addURL: function () {
        console.log('addURL');

        var song = {
            id: '3',
            title: 'California Lullabye (Seccond One)',
            album: 'The Beautiful Machine',
            artist: 'Josh Woodward',
            file: 'https://www.joshwoodward.com/mp3/JoshWoodward-TheBeautifulMachine-01-CaliforniaLullabye.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/5/54/Public_image_ltd_album_cover.jpg'
        }

        var callbackFunc = function() {
            console.log('Song queued');
        }

        cordova.plugins.audioPlayer.queue(song, callbackFunc);
    },

    clear: function () {
        console.log('stop');

        var callbackFunc = function() {
            console.log('Playlist cleared');
        }
        cordova.plugins.audioPlayer.stop(callbackFunc);
    },

    current: function () {
        console.log('current');
        var succes = function(id) {
            console.log(id);
            var string = 'Current Track ' + id;

            var dismissedFcn = function() {
                console.log('dismissed');
            };

            navigator.notification.alert(
                string,  // message
                dismissedFcn,         // callback
                'Message',            // title
                'OK'                  // buttonName
            );
        };
        cordova.plugins.audioPlayer.getCurrentTrack(succes);
    },

    fadeIn: function () {
        console.log('fadeInVolume');

        var callbackFunc = function() {
            console.log('Faded in');
        }
        cordova.plugins.audioPlayer.fadeInVolume(callbackFunc);
    },

    fadeOut: function () {
        console.log('fadeOutVolume');

        var callbackFunc = function() {
            console.log('Faded out');
        }
        cordova.plugins.audioPlayer.fadeOutVolume(callbackFunc);
    }
};

app.initialize();
