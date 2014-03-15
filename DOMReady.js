(function() {
    var domready = (function(fn) {
        var isInsideFrame = (top != self),
            eventList = [],
            isDomReady = false,
            readyHandler;

        function eventsEmitter() {
            if(!isDomReady) {
                isDomReady = true;
                for(var i = 0, iLen = eventList.length; i < iLen; i++) {
                    eventList[i]();
                }
            }
        }

        if(document.addEventListener) {
            readyHandler = function() {
                document.removeEventListener('DOMContentLoaded', readyHandler, false);
                eventsEmitter();
            }
        } else if(document.attachEvent) {
            readyHandler = function() {
                document.detachEvent('onreadystatechange', readyHandler);
                eventsEmitter();
            }
        }

        if(document.readyState === 'complete') {
            isDomReady = true;
        } else {
            if(document.addEventListener) {
                document.addEventListener('DOMContentLoaded', readyHandler, false);
            } else if(document.attachEvent) {
                 if(document.documentElement.doScroll && !isInsideFrame) {
                    function doScrollCheck() {
                        try {
                            document.documentElement.doScroll('left');
                        } catch(e) {
                            setTimeout(doScrollCheck, 10);
                            return;
                        }
                        eventsEmitter();
                    }
                    doScrollCheck();
                }
                document.attachEvent('onreadystatechange', readyHandler);
            }
        }

        return function(fn) {
            if(isDomReady) {
                fn();
            } else {
                eventList.push(fn);
            }
        };
    })();
    window.domready = domready;
})();
