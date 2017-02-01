//Load common code that includes config, then load the app logic for this page.
requirejs(['common/glop'], function (glop) {
    document.getElementById("demo").innerHTML = glop.hello();
});