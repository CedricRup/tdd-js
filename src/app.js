//Load common code that includes config, then load the app logic for this page.
requirejs(['common/glop','lib/jquery'], function (glop) {
    $("#demo").text(glop.hello());
});