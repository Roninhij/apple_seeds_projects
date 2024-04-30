// 1 //
const characterName = "iron warrior";
let newName = [];
newName = characterName.split(" ");
for (let i = 0; i < newName.length; i++) {
  let name = newName[i][0].toUpperCase() + newName[i].slice(1);
  console.log(name);
}

// 2 //

const inventoryItem = [
  "Iron Sword",
  "Healing Potion",
  "Steel Shield",
  "Iron axe",
];
const qurey = "Iron";
let arr = [];
for (let i = 0; i < inventoryItem.length; i++) {
  if (inventoryItem[i].includes(qurey)) {
    arr.push(inventoryItem[i]);
  }
}
console.log(arr);

// 3 //

const npc = "Goblin, Grunty";
let npcName = [];
let newNpcName = "";

npcName = npc.split(" ").reverse();
newNpcName = npcName.join();

console.log(newNpcName.replaceAll(",", " "));

// 4 //

let hours = "3h 45min";
let time = hours.split(" ");

let h = parseInt(time[0]);
let min = parseInt(time[1]);

console.log(`${h} horus and ${min} minutes`);

// 5 //

let gameTitle = "Epic Fantasy Battle";
let acronym = gameTitle.split(" ");
let acro = "";
for (let i = 0; i < acronym.length; i++) {
  acro += acronym[i][0];
}
console.log(acro);

// 6 //

let details = "Iron Warrior;Warrior;10";
let info = details.split(";");
console.log(info);
for (let i = 0; i < info.length; i++) {
  info[i] = info[i].split(" ");
  let name = info[0];
  let class2 = info[1];
  let level = info[2];
  console.log(`${name}, class: ${class2}, level: ${level}`);
  return;
}

// 7 //

let forslug = "Dark Forest";
console.log(forslug.toLowerCase().replace(" ", "-"));

// 8 //

let quest =
  "Retrieve the sacred artifact from the dragon's lair. But beware, the dragon is cunning and powerful.";
const numbers = 100;
for (let quest = 0; quest < quest.length; quest++) {}

// 9 //

const monsters = "Goblin, Orc, Dragon";
const arrNames = monsters.split(",");
console.log(arrNames);
