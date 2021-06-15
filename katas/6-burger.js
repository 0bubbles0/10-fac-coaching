/*
6. New Cashier Does Not Know About Space or Shift 
Some new cashiers started to work at your restaurant.

They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

All the orders they create look something like this:

"milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

Their preference is to get the orders as a nice clean string with spaces and capitals like so:

"Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

The kitchen staff expect the items to be in the same order as they appear in the menu.

The menu items are fairly simple, there is no overlap in the names of the items:

1. Burger
2. Fries
3. Chicken
4. Pizza
5. Sandwich
6. Onionrings
7. Milkshake
8. Coke
*/

function getOrder(input) {
  let order = "";
  let menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
  for (let i = 0; i < menu.length; i++) {
    let regex = new RegExp(menu[i], "gi");
    let finds = input.match(regex);
    if (finds) {
      order += `${menu[i]} `.repeat(finds.length);
    }
  }
  return order.trimEnd();
}

const test1 = "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza";
const test1R = "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke";
const test2 = "pizzachickenfriesburgercokemilkshakefriessandwich";
const test2R = "Burger Fries Fries Chicken Pizza Sandwich Milkshake Coke";

console.log(getOrder(test1) + ".");
console.log(getOrder(test1R) + ".");
console.log(getOrder(test2) + ".");
console.log(getOrder(test2R) + ".");

//Other solutions
const menu = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
const capitalize = word => word.slice(0, 1).toUpperCase() + word.slice(1);
const comparator = (a, b) => menu.indexOf(a) - menu.indexOf(b);

function getOrder(input) {
  return input.match(new RegExp(menu.join("|"), "ig")).map(capitalize).sort(comparator).join(" ");
}
//OR
const MENU = {
  Burger: 1,
  Fries: 2,
  Chicken: 3,
  Pizza: 4,
  Sandwich: 5,
  Onionrings: 6,
  Milkshake: 7,
  Coke: 8,
};
const REG_CMD = new RegExp(Object.keys(MENU).join('|'), 'gi');

function getOrder(cmd) {
  return cmd.match(REG_CMD)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .sort((x, y) => MENU[x] - MENU[y])
    .join(' ');
}

//OR
const getOrder = input => {
  const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
  let orders = input.match(new RegExp(menu.join('|'), 'gi'))
    .map(item => item[0].toUpperCase() + item.slice(1))
    .sort((a, b) => menu.indexOf(a) - menu.indexOf(b));
  return orders.join(' ');
};