// Number 1

class Character {
  #health = 60;
  constructor(name, strength, defense) {
    this.name = name;
    this.strength = strength;
    this.defense = defense;
  }

  get health() {
    return this.#health;
  }

  set setHealth(h) {
    this.#health = h < 0 ? 0 : h;
  }

  attack(target) {
    target.#health -= this.strength - target.defense;
  }
  receiveDamage(damage) {
    this.#health -= damage;
    if (this.#health <= 0) {
      this.#health = 1;
    }
  }

  displayStats() {
    console.log(
      `this character ${this.name}, health: ${this.health}, strength: ${this.strength} defense: ${this.defense}`
    );
  }
  characterType() {}
}
const omar = new Character("Omar", 20, 15);
const hussien = new Character("hussien", 20, 10);
console.log(omar.health);
// omar.setHealth = -50;
console.log(omar.health);
omar.attack(hussien);
console.log(hussien.health);
omar.receiveDamage(58);
console.log(omar.health);
omar.displayStats();


