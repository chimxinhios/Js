
const inventory = [

    {
        name: 'HP Envy 13aq',

        price: 21000,

        brand: 'HP',

        quantity: 5,
    },

    {
        name: 'Dell XPS 9370',

        price: 30000,

        brand: 'Dell',

        quantity: 1,
    },

    {
        name: 'Dell Inspiron 3567',

        price: 9300,

        brand: 'Dell',

        quantity: 12,
    },

    {
        name: 'Dell Latitude E5450',

        price: 8600,

        brand: 'Dell',

        quantity: 2,
    },

    {
        name: 'Asus Zenbook',

        brand: 'Asus',

        price: 20000,

        quantity: 4,

    },

    {
        name: 'HP Pavilion',

        brand: 'HP',

        price: 14000,

        quantity: 7,
    },]
let inventoryByBrand = {};

let hp = [];
let dell = [];
let asus = [];
for (let i in inventory) {
    if (inventory[i].brand == 'HP') {
        hp.push(inventory[i]);
    } else if (inventory[i].brand == 'Asus') {
        asus.push(inventory[i]);
    } else {
        dell.push(inventory[i]);
    }
}
inventoryByBrand.hp = hp;
inventoryByBrand.asus = asus;
inventoryByBrand.dell = dell;

console.log(inventoryByBrand);

let input = prompt("Which Brand ?");
let arrinput = inventoryByBrand[input.toLowerCase()];
let listname = ' ';
let total = 0;
for(let i in inventoryByBrand[input]){
    listname += arrinput[i].name + '\n';
    total += arrinput[i].price *arrinput[i].quantity; 
}
alert(`There are ${arrinput.length} generations of '${input.toUpperCase()}' in inventory \n\n${listname}\n with total value : ${total.toLocaleString()}VND`);
