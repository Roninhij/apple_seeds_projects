var number = 6;
var number2 = 7;
var number3 = -2;
console.log(number + number2 + number3);

let manga = "anime";
console.log(manga);

const isGood = true;
console.log(isGood);

var n1 = 5;
n1 = n1 + 7;
console.log(n1 + 7);
console.log(n1);

let n2 = 5;
n2 = n2 + 1;
console.log(n2 + 1);
console.log(n2);

const n3 = 20;
console.log(n3);
n3 = 50;

// TypeError: Assignment to constant variable.
// at Object.<anonymous> (c:\Users\omar-22\Desktop\AppleSeeds-Porjects\JavaScript\Primitive-Data-Type\4-Understanding-let.js:22:4)
// at Module._compile (node:internal/modules/cjs/loader:1376:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
// at Module.load (node:internal/modules/cjs/loader:1207:32)
// at Module._load (node:internal/modules/cjs/loader:1023:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
// at node:internal/main/run_main_module:28:49

// No, once you declare a variable with const , it cannot be redeclared as let or var in the same scope
