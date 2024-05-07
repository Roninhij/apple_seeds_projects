// 1

const player = [{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }];
const arr = player.map((n) => n.name);
console.log(arr);

// 2

const filterPlayersByMinLevel = (players, minLevel) => {
  return players.filter((player) => player.level >= minLevel);
};

const players = [{ level: 1 }, { level: 2 }, { level: 3 }],
  minLevel2 = 2;

const minLevel = 2;
const filteredPlayers = filterPlayersByMinLevel(players, minLevel);
console.log(filteredPlayers);

// 3

const players2 = [{ health: 100 }, { health: 120 }, { health: 80 }];

const totalHealth = players2.reduce(
  (total, players) => total + players.health,
  0
);
console.log(totalHealth);

// 4

const weapons = [
  { inventory: ["sword", "health potion"] },
  { inventory: ["axe", "shield"] },
];
const items = weapons.map((i) => i.inventory);
console.log(items);

// 5

const playerHealth = [{ health: 100 }, { health: 120 }, { health: 80 }];
playerHealth.sort((a, b) => b.health - a.health);
console.log(playerHealth);

// 6

const playerLocations = [
  { location: "forest" },
  { location: "mountain" },
  { location: "castle" },
];
// location = "forest";
// console.log();
// newArr = playerLocations.map((pl) => (pl.location === "forest" ? pl : ""));
// newArr = newArr.filter((obj) =>
//   typeof obj === "string" && obj === "" ? false : true
// );
// console.log(newArr);
// console.log(newlocation);

// ==========

// const location = "forest";

// const playersLo = players
//   .filter((player) => player.location === location)
//   .map((player) => {
//     return player;
//   });

const location = "forest";

const playersLo = playerLocations.filter(
  (player) => player.location === location
);
console.log(playersLo);

// 7
