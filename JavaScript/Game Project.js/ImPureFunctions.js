// number 1
// let characterStats = [];
const characterStats = []; //GLOBAL ARRAY

function initializeCharacterStats() {
  //your code goes here V
  characterStats.push(["Doom", 99]);
}

initializeCharacterStats();
console.log(characterStats);

// number 2
function addCharacterStat(characterName, strength) {
  // add sub-array to characterStats
  characterStats.push([characterName, strength]);
  //charname and stregth to sub array
}
addCharacterStat("Lux", 18);
addCharacterStat("Omar", 100);
addCharacterStat("hussein", 999);
console.log(characterStats);

// number 3
console.log("number 3");
console.log(characterStats);
function findCharacterStrength(characterName2) {
  for (let i = 0; i < characterStats.length; i++) {
    if (characterStats[i][0] === characterName2) {
      console.log(characterStats[i][1]);
      return;
    }
  }
  console.log("character not found");
}
findCharacterStrength("Omar");

// let examaple = [
//  ["Doom", 99],
//   0       1
// ["Doom", 99],
// ["Doom", 20]
// ]
// number 4
function updateCharStrength(charName, newStr) {
  for (let i = 0; i < characterStats.length; i++) {
    if (characterStats[i][0].toLowerCase() === charName.toLowerCase()) {
      characterStats[i][1] = newStr;
      return;
    }
  }
  console.log("Character not found");
}
updateCharStrength("Doom", 88);
// number 5
console.log("exersice 5");
function removeCharacterStat(characterName3) {
  for (let i = 0; i < characterStats.length; i++) {
    if (characterStats[i][0] === characterName3) {
      characterStats.splice(i, 1);
      return;
    }
  }
  console.log(characterName3);
}
removeCharacterStat(`Lux`);
console.log(characterStats);

// number 6
console.log("exersice 6");
function listCharacters() {
  for (let i = 0; i < characterStats.length; i++) {
    console.log(`${characterStats[i][0]} - ${characterStats[i][1]}`);
  }
}
listCharacters();

// 7
console.log("Exercise 7");
const playerStats7 = [
  ["Jhon", 10],
  ["Mary", 80],
  ["Alex", 90],
  ["Michael", 30],
  ["Omar", 200],
];

function strongestCharacter() {
  let strongestPlayer = playerStats7[0];
  for (let i = 1; i < playerStats7.length; i++) {
    if (strongestPlayer[1] < playerStats7[i][1])
      strongestPlayer = playerStats7[i];
  }
  return strongestPlayer;
}

console.log(strongestCharacter());
