const gameWorld = {
  players: [],
  enemies: [],
  items: [],
  npcs: [],

  createEntity: function (name, health, position, inventory) {
    const entity = {
      name: name,
      health: health,
      position: position,
      inventory: inventory,
    };
    return entity;
  },

  createPlayer: function (name, health, position, inventory) {
    return {
      name: name,
      health: health,
      position: position,
      inventory: inventory,
      move: function (newPosition) {
        this.position = newPosition;
      },
    };
  },

  addPlayer: function (player) {
    this.players.push(player);
  },

  removePlayer: function (name) {
    this.players = this.players.filter(function (player) {
      return player.name !== name;
    });
  },
  addEnemy: function (name) {
    this.enemies.push(name);
  },
  removeEnemy: function (enemy) {
    for (let i = 0; i < this.enemies.length; i++) {
      let element = this.enemies[i];
      let enemyName = element.name;
      if (enemyName === enemy) {
        this.enemies.splice(i, 1);
        return element;
      }
    }
    console.log(enemy + " Not Found! ");
  },

  additems: function (name) {
    this.items.push(name);
  },
  removeItems: function (name) {},
  addnpcs: function (name) {
    this.npcs.push(name);
  },
};

let p1 = gameWorld.createPlayer("Subhi", 10, { x: 10, y: 10 }, [
  "Sword",
  "Armor",
  "Potion",
]);

let p2 = gameWorld.createPlayer("Khader", 10, { x: 10, y: 10 }, [
  "Sword",
  "Armor",
  "Potion",
]);

let p3 = gameWorld.createPlayer("Abbas", 10, { x: 10, y: 10 }, [
  "Sword",
  "Armor",
  "Potion",
]);

let e1 = {
  name: "Godzilla",
  health: 10,
  position: { x: 10, y: 10 },
  inventory: ["Gun", "Armor", "Potion"],
};
let e2 = {
  name: "monster x",
  health: 10,
  position: { x: 10, y: 10 },
  inventory: ["Rifle", "Armor", "Potion"],
};
let e3 = {
  name: "Snake",
  health: 10,
  position: { x: 10, y: 10 },
  inventory: ["Glock", "Armor", "Potion"],
};

let h1 = {
  name: "Godzilla",
  health: 10,
  position: { x: 10, y: 10 },
  inventory: ["Gun", "Armor", "Potion"],
};
let h2 = {
  name: "monster x",
  health: 10,
  position: { x: 10, y: 10 },
  inventory: ["Rifle", "Armor", "Potion"],
};
let h3 = {
  name: "Snake",
  health: 10,
  position: { x: 10, y: 10 },
  inventory: ["Glock", "Armor", "Potion"],
};

gameWorld.addPlayer(p1);
gameWorld.addPlayer(p2);
gameWorld.addPlayer(p3);

gameWorld.addEnemy(e1);
gameWorld.addEnemy(e2);
gameWorld.addEnemy(e3);

gameWorld.additems(h1);
gameWorld.additems(h2);
gameWorld.additems(h3);

console.log(gameWorld);

gameWorld.removePlayer("Khader");

// console.log(gameWorld);

// //

gameWorld.removeEnemy("monster x");

// console.log(gameWorld);

// 1 //
gameWorld.addnpcs("weak");
console.log(gameWorld.npcs);
gameWorld.additems("sword");
console.log(gameWorld.items);
gameWorld.addEnemy("random");
console.log(gameWorld.enemies);
gameWorld.addPlayer("ahmed");
console.log(gameWorld.players);
