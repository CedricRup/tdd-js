define(function () {

    var drinks = {
        'Chocolate' : 10,
        'Tea':10,
        'Coffee':30
    }

    function getStock(drink)
    {
        return drinks[drink];
    }

    function decrement(drink)
    {
        return drinks[drink]--;
    }
   
    return {
        getStock : getStock,
        decrement : decrement
    }
});