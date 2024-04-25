// number 1
const experiencePoints = [100, 150, 75];
let totalExperience = 0;

for (let i = 0; i < experiencePoints.length; i++) {
  totalExperience += experiencePoints[i];
}

console.log("Total Experience:", totalExperience);

// number 2
const questTitles = ["Quest 1", "Quest 2", "Quest 3"];
let onlynames = [];
if (typeof questTitles[1] === "string") {
  onlynames.push(questTitles[1]);
}
console.log(onlynames);
// number 3
const enemyHealth = [80, 120, 65];
for (let i = 0; i <= enemyHealth.length; i++) {
  if (enemyHealth[i] >= 100) {
    console.log(enemyHealth[i]);
  }
}
// number 4
const questRewards = [50, 100, 75];
for (let i = 0; i < questRewards.length; i++) {
  console.log(questRewards[i] + 20);
}
// number 5
const questRewards2 = [50, 100, 75, 100];
const specificReward = 100;
for (let i = 0; i < questRewards.length; i++) {
  if ((questRewards2[i] = specificReward)) console.log(questRewards2[i]);
}
// number 6
const questChallenges = [120, 150, 75];
const test22 = 100;
for (let i = 0; i <= questChallenges.length; i++) {
  if (questChallenges[i] >= test22) console.log(questChallenges[i]);
}
// number 7
const questRewards3 = [50, 100, 75, 150];
for (let i = 0; i <= questRewards3.length; i++) {
  if (questRewards3[i] > 100) {
    console.log(questRewards3[i]);
  }
}
// number 8
const experiencePoints1 = [100, 150, 75];
let enemyHealth32 = [80, 120, 60, 100];
let totalExperience1 = 0;
for (let i = 0; i < experiencePoints.length; i++) {
  totalExperience += enemyHealth32[i] + experiencePoints[i];
}
console.log(totalExperience);
