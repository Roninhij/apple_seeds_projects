// Basic
// Ex1.1 - Yes or No
console.log("Basic");
console.log("Ex1.1 - Yes or No");
console.log("=================");
console.log();
function yesNo(booleanValue) {
  return booleanValue ? "Yes" : "No";
}

console.log(yesNo(true));

// Simple Math
// Ex2.1 - Ex1.1 - Sum of lowest numbers
console.log("Simple Math");
console.log("Ex2.1 - Sum of lowest numbers");
console.log("===============================");
console.log();

// function sumOfTwoLowestNumbers(arrOfPositiveIntegers) {
//   let lowest = Infinity;
//   let secondLowest = Infinity;
//   for (let i = 0; i < arrOfPositiveIntegers.length; i++) {
//     if (arrOfPositiveIntegers[i] < lowest) {
//       secondLowest = lowest;
//       lowest = arrOfPositiveIntegers[i];
//     } else if (arrOfPositiveIntegers[i] < secondLowest) {
//       secondLowest = arrOfPositiveIntegers[i];
//     }
//   }
//   //   console.log(lowest1, lowest2);
//   return lowest + secondLowest;
// }
function sumOfTwoLowestNumbers(arrOfPositiveIntegers) {
  const sortedArr = arrOfPositiveIntegers.sort((a, b) => a - b);
  return sortedArr[0] + sortedArr[1];
}
console.log(sumOfTwoLowestNumbers([19, 5, 42, 2, 77]));
console.log(sumOfTwoLowestNumbers([10, 343445353, 3453445, 3453545353453]));

// Ex2.2 - One and Zero - Binary
console.log("Ex2.2 - One and Zero - Binary");
console.log("===============================");
console.log();

function binaryToNumber(binaryArray) {
  let num = 0;
  const length = binaryArray.length;
  for (let i = 0; i < length; i++) {
    num += binaryArray[i] * Math.pow(2, length - i - 1);
  }
  return num;
}
console.log(binaryToNumber([1, 1, 0, 1]));

// Ex2.3 - Find the Next Perfect Square
console.log("Ex2.3 - Find the Next Perfect Square");
console.log("=====================================");
console.log();

function findNextSquare(num) {
  let sqrt = Math.sqrt(num);
  perfectSqrt = Math.floor(sqrt);
  if (sqrt !== perfectSqrt) {
    return -1;
  }
  sqrt++;
  return sqrt * sqrt;
}
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));

// Ex2.4 - Unique
console.log("Ex2.4 - Unique");
console.log("=====================================");
console.log();

function findUniq(numbers) {
  const sortedArr = numbers.sort((a, b) => a - b);
  if (sortedArr[0] !== sortedArr[1]) {
    return sortedArr[0];
  }
  if (sortedArr[sortedArr.length - 1] !== sortedArr[sortedArr.length - 2]) {
    return sortedArr[sortedArr.length - 1];
  }
}
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));

// Ex2.5 - Summation
console.log("Ex2.5 - Summation");
console.log("====================");
console.log();

function summation(value) {
  let sum = 0;
  for (let i = 1; i <= value; i++) {
    sum += i;
  }
  return sum;
}
console.log(summation(2));
console.log(summation(8));

// Ex2.6 - Years and Centuries
console.log("Ex2.6 - Years and Centuries");
console.log("================================");
console.log();

function centuryFromYear(years) {
  let century = Math.floor((years - 1) / 100) + 1;
  return century;
}
console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));

// Ex2.7 - Basic Math
console.log("Ex2.7 - Basic Math");
console.log("======================");
console.log();

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return undefined;
  }
}
console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
