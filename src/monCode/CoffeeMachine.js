define(["monCode/Stock"],function (stock) {

    var drinks = {
        'Chocolate' : 'H',
        'Tea':'T',
        'Coffee':'C'
    }

    function order(drinkType,sugarNumber){
        if (stock.getStock(drinkType) == 0)
        {
            return "KO";
        }
        stock.decrement(drinkType);
        var sugar = sugarNumber  == 0 ? "" : sugarNumber;
        return drinks[drinkType] + ":" + sugar  +":";
    }
   
    return {
        order : order
    }
});