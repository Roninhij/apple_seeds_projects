// number 1
const character = {
  name: "Doom",
  class: "Demon Slayer",
  level: 99,
  abilities: ["Immense Strength", "Destruction", "Indomitable Rage"],
  stats: [50, 100, 150],
  getOverallStrength: function () {
    let sum = 0;
    for (let i = 0; i < this.stats.length; i++) {
      sum += this.stats[i];
    }
    this.averageRating = sum / this.stats.length;
  },
};
character.getOverallStrength();
console.log(character);

// number 2
const equipment = {
  weapon: "B-90",
  armor: "mighty armor",
  accessories: ["Shotgun", "Plasma gun", "Rocket launcher"],
};
character2 = Object.assign({}, { equipment }, character);
console.log(character2);
console.log(character2.abilities[0]);
console.log(character2["abilities"][0]);
console.log(character2.equipment.armor);
console.log(character2["equipment"]["armor"]);
// number 3

character2["equipment"]["weapon"] = "Glock";
character2.equipment.weapon = "ak-47";
character2.level = 100;
character2.abilities.push("breathing");
delete character2.class;
console.log(character.hasOwnProperty("stats"));
console.log(character2);

// number 4

const characters = [
  { name: "Eldrin", attributes: { health: 100, mana: 50 } },
  { name: "Mira", attributes: { health: 85, mana: 60 } },
];
console.log(characters[0].attributes.health);
function averageHealth(characters) {
  let sum = 0;
  for (let i = 0; i < characters.length; i++) {
    sum += characters[i].attributes.health;
  }
  return sum / characters.length;
}
const healthNumber = averageHealth(characters);
console.log(healthNumber);

// number 6

console.log(`num 6`);
const characterStats = {
  name: 'Eldrin',
  class: "Mage",
  level: 7,
  health: 100,
  mana: 200,
};

const keys = Object.keys(characterStats);
for (const key of keys) {
  console.log(`key: ${key}, Value: ${characterStats[key]}`);
}

// 7

console.log(`num 7`);
const gameScores = {
  "Eldrin": 950,
  "Mira": 1200,
  "Thorn": 800,
};
const increasedd = Object.entries(gameScores);
function increase(increasedd) {
  for (let i = 0; i < increasedd.length; i++) {
    if (increasedd[i][1] < 1000) {
      increasedd[i][1]+= 100;
    }

    console.log(increasedd[i]);
  }
}
increase(increasedd);

// 8

console.log(`num 8`);
const quests = {
  1: { name: "Find the Lost Sword", difficulty: "Easy", reward: "100 gold" },
  2: { name: "Defeat the Dragon", difficulty: "Hard", reward: "500 gold" },
  3: { name: "Escort the Merchant", difficulty: "Medium", reward: "250 gold"},
};
const difficultyLevel = Object.entries(quests);
function level2(difficultyLevel) {
  for (let i = 0; i < difficultyLevel.length; i++) {
    if (difficultyLevel[i][1]["difficulty"] == "Hard") {
      console.log(difficultyLevel[i], difficultyLevel[i][1].isHard = true);
    }
  }
}
level2(difficultyLevel);
