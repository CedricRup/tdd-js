define(['monCode/ui','lib/jquery'], function (ui) {
    describe('ui', function () {
        it('doit changer le texte du p', function () {
            var dom = $('<div><p id="toChange"></p></div>');
            ui.setText(dom)
            expect(dom.find("#toChange").text()).to.equal("CNP");
        });

    });
});