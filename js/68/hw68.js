const bankAccount = (function () {
    "use strict";
    //part 1
    const account1 = {
        balance: 0,
        performTransaction: function (amount) {
            this.balance += amount;
        }
    };

    const account2 = {
        balance: 0,
        performTransaction: function (amount) {
            this.balance += amount;
        }

    };

    //part 2 and 3
    const account3 = {
        balance: 0,
    };

    function performTransaction(amount) {
        this.balance += amount;
    }

    const depositAccount3 = performTransaction.bind(account3);
    depositAccount3(10);

    console.log(account3.balance);
}
)();