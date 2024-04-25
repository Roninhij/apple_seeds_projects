// number 1
// function getPlayerName(player) {
//   return 10;
// }
// console.log(getPlayerName());

let getPlayerName = (player) => player;
console.log(getPlayerName("Doom"));

// number 2

// const getPlayerHealth = (health) => (health % 70 === 40 ? "high" : "medium");
// console.log(getPlayerHealth("low"));

const getPlayerHealth = (health) =>
  health >= 70 ? "high" : health > 40 ? "medium" : "low";

console.log(getPlayerHealth(50));

// number 3
let items = [
  { name: "lightShoes", value: 8 },
  { name: "doomSword", value: 9 },
];

let getTotalInventoryValue = (items) => {
  let sum = 0;
  items.forEach((item) => {
    sum += item.value;
  });
  return sum;
};
console.log(getTotalInventoryValue(items));


// number 4
let sortedItems = items.sort((a, b) => b.value - a.value);
console.log(sortedItems);


// number 5

let getItemNames = (items) => items.map((item) => item.name);
console.log(getItemNames(items));
