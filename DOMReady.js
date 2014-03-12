(function() {
    function domready(fn) {
        var isInsideFrame = (top != self),
            done = false;

        function readyHandler() {
            if(done) {
                return;
            }
            done = true;
            fn();
        }

        if(document.readyState === 'complete') {
            readyHandler();
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
                        readyHandler();
                    }
                    doScrollCheck();
                }
                document.attachEvent('onreadystatechange', function() {
                    if(document.readyState === 'complete') {
                        readyHandler();
                    }
                });
            }
        }
    }
    window.domready = domready;
})();
