const inventory = {
    item1: 20, // USD
    item2: 30,
    item3: 50
};

const exchangeRate = 80; // 1 USD to 80 INR

const convertedInventory = Object.keys(inventory).map(item => ({
    item: item,
    priceInUSD: inventory[item],
    priceInINR: inventory[item] * exchangeRate
}));

console.log("Original Inventory:", inventory);
console.log("Converted Inventory:", convertedInventory);
