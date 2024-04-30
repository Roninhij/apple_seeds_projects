// number 1
function calculateAverageRating() {
  const number = [8.5, 7.9, 6.3, 9.2, 8.1];
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
  }
  console.log(sum / number.length);
}

calculateAverageRating();
// number 2
function extractDevelopersNames() {
  const Games = [
    "The Legend of Zelda:Breath of the wild(2017) - Developed by Nintendo",
    "Final Fantasy VII (1997) - Developed by Square Enix",
    "Halo:Combat Evolved (2001) - Developed By Bungie",
  ];
  for (let i = 0; i < Games.length; i++) {
    Games[i].split("-");
  }
  console.log(Games);
  return;
}
extractDevelopersNames();
// number 3
function containsWordInTitle() {
  let gameTitle = "Final Fantasy VII ";
  const keyword = "Fantasy";

  if (gameTitle.includes(keyword)) {
    return true;
  } else {
    return false;
  }
}
console.log(containsWordInTitle());
// number 4

const gamesTitles = ["Assassin's Creed", "Age of Empires", "Animal Crossing"];
const gaTitles = ["Assassin's Creed", "Sge of Empires", "Animal Crossing"];

function allTitlesStartWithSameLetter(titles) {
  for (let i = 0; i < titles.length; i++) {
    if (titles[i][0].toLowerCase() !== titles[0][0].toLowerCase()) return false;
  }
  return true;
}

const result = allTitlesStartWithSameLetter(gamesTitles);
const result2 = allTitlesStartWithSameLetter(gaTitles);
console.log("result", result);
console.log("result2", result2);
// number 5
function concatenateGenres(arr) {
  const gameGenres = ["RPG", "Action", "Adventurne"];
  for (let i = 0; i < gameGenres.length; i++) {
    let testing = gameGenres.toString();

    console.log(testing);
    return;
  }

  // let res = "RPG, Action, Adventurne"; //"RPG", Action, Adventurne
  // for (let i = 0; i < arr.length; i++) {
  //   res += arr[i];
  //   console.log("before , =>", res);
  //   if (i !== arr.length - 1) {
  //     res += ", ";
  //     console.log("after , =>", res);
  //   }
  // }
  // return res;
}
concatenateGenres();
const str = "RPG,Action,Adventurne";

let str2 = str.split(",").join(" ");
console.log(str2);
// number 6
const experiencePoint = [50, 75, 100, 30, 20, 100];
let count = 0;
function countInXPRange() {
  for (let i = 0; i < experiencePoint.length; i++) {
    if (experiencePoint[i] >= 75 && experiencePoint[i] <= 100) {
      count++;
    }
  }
  console.log(count);
}
countInXPRange();

// number 7

function findGamesByDeveloper(titles, correspondingDevelopers) {
  for (let i = 0; i < titles.length; i++) {
    if (correspondingDevelopers[i] === correspondingDevelopers[0]) {
      console.log(titles[i]);
    }
  }
}

findGamesByDeveloper(
  ["The Legend of Zelda", "Final Fantasy", "Halo Combat Evolved"],
  ["Nintendo", "Square Enix", "Bungie"]
);

// number 8
console.log("number 8");
function capitalizeFirstLetter(titles) {
  for (let i = 0; i < titles.length; i++) {
    console.log(titles[i][0].toUpperCase() + titles[i].slice(1));
  }
}

capitalizeFirstLetter([
  "the legend of zelda",
  "final fantasy",
  "halo combat evolved",
]);

// number 9

function uniqueXP(value) {
  let arr = [];
  for (let i = 0; i < value.length; i++) {
    if (!arr.includes(value[i])) {
      arr.push(value[i]);
    }
  }
  console.log(arr);
  return;
}

uniqueXP([100, 50, 75, 50, 100, 75, 100]);

// number 10

function sortTitlesAlphabetically(titles) {
  for (let i = 0; i < titles.length; i++) {
    titles[i][0].slice();

    console.log(titles.sort());

    return;
  }
}

sortTitlesAlphabetically([
  "the legend of zelda",
  "final fantasy",
  "halo combat evolved",
]);

// number 11

function filterXPByCriteria(xp, greaterThan, lessThan) {
  let arr = [];
  for (let i = 0; i < xp.length; i++) {
    if (xp[i] > greaterThan && xp[i] < lessThan) {
      
      arr.push(xp[i]);
    }
  }
  console.log(arr);
}

filterXPByCriteria([10, 20, 30, 40, 50], 20, 50);
