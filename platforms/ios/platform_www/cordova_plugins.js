cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-audioplayer.AudioPlayer",
        "file": "plugins/cordova-plugin-audioplayer/www/audioplayer.js",
        "pluginId": "cordova-plugin-audioplayer",
        "clobbers": [
            "cordova.plugins.audioPlayer"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-audioplayer": "1.0.0-dev",
    "cordova-plugin-dialogs": "1.3.0",
    "cordova-plugin-whitelist": "1.3.0"
};
// BOTTOM OF METADATA
});