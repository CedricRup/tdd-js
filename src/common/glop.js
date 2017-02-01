define(["common/common"],function (common) {
    //Do setup work here
	function hello(who){
		return 'hello '+ common.name;
	}
    return {
        hello: hello,
    }
});