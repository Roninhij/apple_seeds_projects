// Number 1
const playerHealth = 11;
if (playerHealth > 10) {
  console.log("Player is strong");
} else {
  console.log("Player is weak");
}
// Number 2
const playerGold = 49;
if (playerGold >= 1 && playerGold < 50) {
  console.log("Rich Player");
} else {
  console.log("Poor Player");
}
// number 3
const weather = "Raining";
const timeOfDay = "2am";
if (weather === "Raining") {
  if (timeOfDay === "2am") {
    console.log("Seek-Shelter");
  } else {
    console.log("Continue the adventure");
  }
} else {
  console.log("Its a new day");
}
// number 4
const playerWeapon = "RayGun";
const enemyWeapon = "DoomSword";
if (playerWeapon === enemyWeapon) {
  console.log("Weapons Clashing!");
} else console.log("Advantage");
// number 5
const playerAge = 15;
if ((playerAge > 13, playerAge < 16)) {
  console.log("you are above required age");
} else {
  console.log("you are under required age");
}

// number 6
let gameScore = 45;
let score = gameScore >= 50 ? "High score" : "low score";
console.log(score);
// number 7
let numOEnemies = 2;
let even =
  numOEnemies % 2 === 0 ? "Even number of enemies" : "Odd number of enemies";
console.log(even);
// watermelon 8
let characterAge = 10;
let age =
  characterAge < 12
    ? "Youngling"
    : characterAge < 19 && characterAge > 13
    ? "Adolescent"
    : "Adult";
console.log(age);
// watermelon 9
let battleSkill = 69;
let batlle = battleSkill > 70 ? "Skilled warrior" : "Train harder";
console.log(batlle);
// watermelon 10
let sessionDuration = 120;
if (sessionDuration < 90) {
  console.log("short");
} else if (sessionDuration < 150 && sessionDuration >= 90) {
  console.log("Moderate");
} else {
  console.log("Marathon");
}

// watermelon 11
let totalPoints = 14;
let usedpoints = 15;
if (totalPoints > usedpoints) {
  console.log("Potions available");
} else {
  console.log("Out of potions");
}
// number 12
let playerAge2 = 22;
let guestAgeRestriction = 18;
if (totalPoints < guestAgeRestriction) {
  console.log("Validate");
} else {
  console.log("Not Validate");
}
// number 13
let dayOfTheWeek = "monday";
if (dayOfTheWeek && "sunday" < "saturday") {
  console.log("Special event happening!");
} else {
  console.log("Regular gameplay");
}
// number 14
let gameSettingYear = 1200;
if (gameSettingYear >= 900 && gameSettingYear >= 1500) {
  console.log("Medieval era setting");
} else {
  console.log("Not in the medieval era");
}
// number 15
let characterClass = "Hero";
let characterLevel = 15;
if (characterClass && 10 > characterLevel) {
  console.log("Powerful warrior");
} else {
  console.log("Average character");
}
// number 16
let playerHealth2 = 100;
let enemyCount = 2;
if (playerHealth2 > 50 && enemyCount < 3) {
  console.log("Ready for battle");
} else {
  console.log("Proceed with caution");
}
// number 17
let questProgress = 100;
let questDifficulty = 3;
if (questProgress == 70 && questDifficulty <= 5) {
  console.log("Quest Completed");
} else {
  console.log("Quest in progress");
}
// number 18
let inventorySize = 95;
if (inventorySize >= 90) {
  console.log("Inventory almost full");
} else {
  console.log("Plenty of space in the inventory");
}
