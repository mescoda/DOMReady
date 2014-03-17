(function() {
    domready(function() {
        var listElem = document.getElementById('list'),
            newLiElem = document.createElement('li');
        newLiElem.className = 'list-item-new';
        newLiElem.innerHTML = 'four';
        listElem.appendChild(newLiElem);
        testResult.push(4.1);
        console && console.log('in 4: append item four');
    });
})();
