/*14. Calculate the final order price
A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
the unit price and quantity of each item.*/

let customerCart = [{unitPrice: 30, quantity: 1},{unitPrice: 5, quantity:2}];

let totalCost = (customerCart) => {
    return customerCart.reduce((total, item) => {
        return total + item.unitPrice *item.quantity;
    }, 0);
};



console.log("The final order price is:- " + totalCost(customerCart));