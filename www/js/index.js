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

        var context = this;

        //register on events
        cordova.plugins.audioPlayer.on('start', function(song) {
            context.makeToast('start');
        });
        cordova.plugins.audioPlayer.on('pause', function(song) {
            context.makeToast('pause');
        });
        cordova.plugins.audioPlayer.on('finish', function(song) {
            context.makeToast('finish');
        });
        cordova.plugins.audioPlayer.on('fail', function(song) {
            context.makeToast('fail');
        });
        cordova.plugins.audioPlayer.on('stop', function(song) {
            context.makeToast('stop');
        });

        //add Event Listener
        document.getElementById('playSong').addEventListener('click', this.playSong);
        document.getElementById('playAnotherSong').addEventListener('click', this.playAnotherSong);
        document.getElementById('queue').addEventListener('click', this.queue);
        document.getElementById('queueAndStart').addEventListener('click', this.queueAndStart);
        document.getElementById('queueAndDelete').addEventListener('click', this.queueAndDelete);
        document.getElementById('play').addEventListener('click', this.play);
        document.getElementById('pause').addEventListener('click', this.pause);
        document.getElementById('playNext').addEventListener('click', this.playNext);
        document.getElementById('stop').addEventListener('click', this.stop);
        document.getElementById('getCurrentTrack').addEventListener('click', this.getCurrentTrack);
        document.getElementById('fadeInVolume').addEventListener('click', this.fadeInVolume);
        document.getElementById('fadeOutVolume').addEventListener('click', this.fadeOutVolume);
        document.getElementById('playLocaleSong').addEventListener('click', this.playLocaleSong);
        document.getElementById('setup').addEventListener('click', this.setup);
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

    playSong: function () {
        console.log('playSong');

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

    playAnotherSong: function () {
        console.log('playAnotherSong');

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

    playLocaleSong: function () {
        console.log('playLocaleSong');

        var song = {
            id: '06',
            title: 'Learn To Fly',
            album: 'Here Today Remixed',
            artist: 'Josh Woodward',
            file: 'Staging/www/assets/JoshWoodward-HereTodayRemixed-06-LearnToFly.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/5/54/Public_image_ltd_album_cover.jpg'
        }

        var callbackFunc = function() {
            console.log('Locale song started');
        }

        cordova.plugins.audioPlayer.play(song, callbackFunc);
    },

    queue: function () {
        console.log('queue');

       var song1 = {
            id: '3',
            title: 'California Lullabye (Seccond One)',
            album: 'The Beautiful Machine',
            artist: 'Josh Woodward',
            file: 'https://www.joshwoodward.com/mp3/JoshWoodward-TheBeautifulMachine-01-CaliforniaLullabye.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/5/54/Public_image_ltd_album_cover.jpg'
        }

        var song2 = {
            id: '11',
            title: 'Let it in',
            album: 'Ashes',
            artist: 'Josh Woodward',
            file: 'https://www.joshwoodward.com/mp3/Ashes/JoshWoodward-Ashes-01-LetItIn.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/5/54/Public_image_ltd_album_cover.jpg'
        }

        var callbackFunc = function() {
            console.log('Songs queued');
        }

        cordova.plugins.audioPlayer.queue( [song1, song2], { replace: false, play: false }, callbackFunc );
    },

    queueAndStart: function () {
        console.log('queueAndStart');

       var song1 = {
            id: '3',
            title: 'California Lullabye (Seccond One)',
            album: 'The Beautiful Machine',
            artist: 'Josh Woodward',
            file: 'https://www.joshwoodward.com/mp3/JoshWoodward-TheBeautifulMachine-01-CaliforniaLullabye.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/5/54/Public_image_ltd_album_cover.jpg'
        }

        var song2 = {
            id: '11',
            title: 'Let it in',
            album: 'Ashes',
            artist: 'Josh Woodward',
            file: 'https://www.joshwoodward.com/mp3/Ashes/JoshWoodward-Ashes-01-LetItIn.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/5/54/Public_image_ltd_album_cover.jpg'
        }

        var callbackFunc = function() {
            console.log('Songs queued');
        }

        cordova.plugins.audioPlayer.queue( [song1, song2], { replace: true, play: true }, callbackFunc );
    },

    queueAndDelete: function () {
        console.log('queueAndDelete');

       var song1 = {
            id: '3',
            title: 'California Lullabye (Seccond One)',
            album: 'The Beautiful Machine',
            artist: 'Josh Woodward',
            file: 'https://www.joshwoodward.com/mp3/JoshWoodward-TheBeautifulMachine-01-CaliforniaLullabye.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/5/54/Public_image_ltd_album_cover.jpg'
        }

        var song2 = {
            id: '11',
            title: 'Let it in',
            album: 'Ashes',
            artist: 'Josh Woodward',
            file: 'https://www.joshwoodward.com/mp3/Ashes/JoshWoodward-Ashes-01-LetItIn.mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/en/5/54/Public_image_ltd_album_cover.jpg'
        }

        var callbackFunc = function() {
            console.log('Songs queued');
        }

        cordova.plugins.audioPlayer.queue( [song1, song2], { replace: true, play: false }, callbackFunc );
    },

    play: function () {
        console.log('play');

        var callbackFunc = function() {
            console.log('Playback started');
        };
        cordova.plugins.audioPlayer.play();
    },

    pause: function () {
        console.log('pause');

        var callbackFunc = function() {
            console.log('Playback paused');
        }

        cordova.plugins.audioPlayer.pause(callbackFunc);
    },

    playNext: function () {
        console.log('playNext');

        var callbackFunc = function() {
            console.log('Next Song started');
        }
        cordova.plugins.audioPlayer.playNext();
    },

    stop: function () {
        console.log('stop');

        var callbackFunc = function() {
            console.log('Playlist cleared');
        }
        cordova.plugins.audioPlayer.stop(callbackFunc);
    },

    getCurrentTrack: function () {
        console.log('getCurrentTrack');
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

    fadeInVolume: function () {
        console.log('fadeInVolume');

        var callbackFunc = function() {
            console.log('Faded in');
        }
        cordova.plugins.audioPlayer.fadeInVolume(callbackFunc);
    },

    fadeOutVolume: function () {
        console.log('fadeOutVolume');

        var callbackFunc = function() {
            console.log('Faded out');
        }
        cordova.plugins.audioPlayer.fadeOutVolume(callbackFunc);
    },

    setup: function () {
        console.log('setup url');

        var callbackFunc = function() {
            console.log('Tracking url set');
        }
        var failureCallback = function() {
            console.log('Failed to set URL');
        }

        var url = '';
        cordova.plugins.audioPlayer.setup(url, callbackFunc, failureCallback);
    },

    makeToast: function(eventName) {
        var dismissedFcn = function() {
            console.log('dismissed');
        };

        navigator.notification.alert(
            eventName,  // message
            dismissedFcn,         // callback
            'Message',            // title
            'OK'                  // buttonName
        );
    }
};

app.initialize();
