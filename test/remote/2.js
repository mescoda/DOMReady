(function() {
    domready(function() {
        var listElem = document.getElementById('list'),
            newLiElem = document.createElement('li');
        newLiElem.className = 'list-item-new';
        newLiElem.innerHTML = 'eight';
        listElem.appendChild(newLiElem);
        testResult.push(8);
        window.console && window.console.log('in 8: append item eight');
    });
})();
