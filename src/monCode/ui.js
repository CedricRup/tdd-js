define(["../lib/jquery"],function () {

    

    function setText(element){
        element.find("#toChange").text("CNP")
    }
   
    return {
        setText : setText
    }
});