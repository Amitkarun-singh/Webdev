/*17. Build a banking application
A banking application needs to manage customer accounts and transactions. The user detail is stored in an
object with a keys name and balance. Write functions using object methods to update a customer's account
balance based on a deposit or withdrawal.*/

class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient balance.");
        }
        this.balance -= amount;
    }
}

const account = new Account("John Doe", 1000);
account.deposit(500);
console.log(account.balance); // 1500
account.withdraw(200);
console.log(account.balance); // 1300
 