// number 1
const weaponInventory = ["Sword", "Bow", "Magic Staff"];
const weaponToCheck = "Sword";
console.log(weaponInventory.includes(weaponToCheck));
// number2
const questNames = [
  "Dragon's Lair",
  "The Lost Artifactr",
  "Rescue the Princess",
];
questExample = [questNames.reverse()];
console.log(questExample);
// number 3
const monsterTypes = ["Dragon", "Goblin", "Orc"];
noobMonster = [monsterTypes.join()];
console.log(noobMonster);
// number 4
const monsterTypes2 = ["Dragon", "Goblin", "Orc"];
let monsterToCheck = "Orc";
console.log(monsterTypes2.includes(monsterToCheck));
// number 5
const questNames2 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Resuce the Princess",
];
const specificQuest = "Resuce the Princes2s";
console.log(questNames2.indexOf(specificQuest));
const index = questNames2.indexOf(specificQuest);
if (index !== -1) {
  console.log("found");
} else {
  console.log("not found");
}

// number 6
let monsterlist = ["Dragon", "Orc", "Goblin"];
monsterlist.pop();
console.log(monsterlist);
// number 7
const monsterList = ["Orc", "Goblin"];
monsterList.unshift("Dragon");
console.log(monsterList);
// number 8
const monsterlist2 = ["Dragon", "Orc", "Goblin"];
monsterlist2.shift();
console.log(monsterlist2);
// number 9
console.log("number9");
const heroList1 = ["Archer", "Mage"];
const heroList2 = ["Warrior", "Healer"];
console.log(heroList1.concat(heroList2));
// number 10
const questNames3 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Resuce the Princess",
];
console.log(questNames3.sort());
// number 11
const spellsString = "Fireball,heal,ice,lance";
console.log(spellsString.split(","));

// number 12
const questnames4 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
const n = 2;
console.log(questnames4.slice(1, n));
// number 13
const monsterList3 = ["Dragon", "Orc", "Goblin"];
monsterList3.length = 0;
console.log(monsterList3);
// number 14
const inventory = ["Sword", "Shield"];
const newWeapon = "Arrow";
inventory.push(newWeapon);
console.log(inventory);
// number 15
const inventory2 = ["Gold", "magic potion", "Shield"];
inventory2.pop();
console.log(inventory2);
console.log("shield");
// number 16
const quest = ["Dragon's Lair", "Rescue the Princess"];
const newQuest = "Defeat the goblin King";
quest.unshift(newQuest);
console.log(quest);
// number 17
const quests = [
  "dragon's lair",
  "Rescue the princess",
  "Defeat the goblin King",
];
console.log(quests.sort());
// number 18
const quests2 = [
  "dragon's lair",
  "Rescue the princess",
  "Defeat the goblin King",
];
const questToCheck2 = "Rescue the princess";
quest.includes(questToCheck2);
console.log(quests2);
// number 19
const scores = [30, 80, 60, 90];
console.log(scores.sort());
