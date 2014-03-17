describe('DOMReady', function() {
    describe('load domready after onload', function() {
        it('should work', function() {
            expect(testResult).toEqual([1]);
        });
    });
});
