const ipc_share = require('electron').remote.getGlobal('sharedObject');
var screenshot = require('desktop-screenshot');

screenshot("screenshot.png", function(error, complete) {
    if(error)
        alert("Screenshot failed");
    else
        alert("Screenshot succeeded");
});
