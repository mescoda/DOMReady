describe('DOMReady', function() {
    describe('check domready sequence', function() {
        it('should be in sequence', function() {
            // execute after onload
            expect(testResult).toEqual([1, 2, 3, 4]);
        });
    });
});
