describe('DOMReady', function() {
    describe('check domready sequence', function() {
        it('should be in sequence', function() {
            // execute after onload
            expect(testResult).toEqual([1, 2, 3, 4, 5, 4.1, 6, 7, 8]);
        });
    });
    describe('check dom append', function() {
        it('should append ok', function() {
            var ulElem = document.getElementById('list');
            expect(ulElem.getElementsByTagName('li')[2].innerHTML).toEqual('three');
            expect(ulElem.getElementsByTagName('li')[3].innerHTML).toEqual('four');
            expect(ulElem.getElementsByTagName('li')[4].innerHTML).toEqual('seven');
            expect(ulElem.getElementsByTagName('li')[5].innerHTML).toEqual('eight');
        });
    });
});
