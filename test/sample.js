define(['glop'], function(glop) {
    describe('just checking', function() {
        it('works for app', function() {
            expect(glop.hello("cedric")).to.equal('hello cedric');
        });
    });
});