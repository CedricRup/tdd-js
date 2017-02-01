define(['monCode/CoffeeMachine'], function (machine) {
    describe('pas de sucre', function () {
        it('doit pouvoir commander un chocolat', function () {
            expect(machine.order("Chocolate", 0)).to.startsWith("H");
        });

        it('doit pouvoir commander un the', function () {
            expect(machine.order("Tea", 0)).to.startsWith("T");
        });

        it('doit pouvoir commander un cafe', function () {
            expect(machine.order("Coffee", 0)).to.startsWith("C");
        });
    });

    describe('Avec du sucre', function () {
        var drinkType = "Chocolate";

        it('commander n sucre', function () {
            var n = 2;
            expect(machine.order(drinkType, n)).to.have.string(":" + n);
        });

        it('doit commander une touillette quand il y a un sucre', function () {
            var n = 1;
            expect(machine.order(drinkType, n)).to.have.string(":" + n);
        });

    });


    describe('Avec stock', function () {
        var drinkType = "Chocolate";
        var stock = require("monCode/Stock");
        
        beforeEach(function () {
            sandbox = sinon.sandbox.create();
        });

        afterEach(function () {
            sandbox.restore();
        });

        it('etre ko si il n y a plus de  chocolat', function () {

            var stub = sandbox.stub(stock, "getStock");
            stub.returns(0); 
            expect(machine.order(drinkType, 0)).to.equal("KO");
        });

        it('le stock doit ne doit pas etre décrémenté si plus de choco', function () {

            sandbox.stub(stock, "getStock", function () { return 0 });

            var mock = sandbox.mock(stock);
            mock.expects("decrement").never();

            machine.order(drinkType, 0);
            mock.verify();
        });

        it('le stock doit etre décrémenté si il en reste', function () {
            
            sandbox.stub(stock, "getStock", function () { return 1 });
            
            var mock = sandbox.mock(stock);
            mock.expects("decrement").once().withExactArgs("Chocolate");
            
            machine.order(drinkType, 0);
            
            mock.verify();
        });

    });
});