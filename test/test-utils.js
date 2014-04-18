// var url1 = 'http://localhost:8000/test/domready/1.js';
var url1 = 'http://sunzheming.fe.baidu.com/test/domready/1.js?t=' + (+new Date);
// var url2 = 'http://localhost:8000/test/domready/2.js';
var url2 = 'http://sunzheming.fe.baidu.com/test/domready/2.js?t=' + (+new Date);

var domreadyUrl = 'http://sunzheming.fe.baidu.com/test/domready/DOMReady.js';

function loadScript(url, callback) {
    var script = document.createElement('script');
    if(script.readyState) {
        script.onreadystatechange = function() {
            if(script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null;
                callback();
            }
        }
    } else {
        script.onload = function() {
            callback();
        }
    }
    script.src = url;
    script.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(script);
}
function cLog(message) {
    if(arguments.length > 1) {
        for(var j = 0, jLen = arguments.length; j < jLen; j++) {
            cLog(arguments[j])
        }
    } else if(Object.prototype.toString.call(message) == '[object Array]') {
        for(var i = 0, iLen = message.length; i < iLen; i++) {
            cLog(message[i]);
        }
    } else {
        window.console && window.console.log(message);
    }
}

function sleep(ms) {
    var start = (+new Date);
    while (true) {
        if ((+new Date) - start > ms) break;
    }
}
