// number 1
let eastEuropeanStandardTime = new Date("Tue Jan 30/2024 15:21:35 GMT+022");
console.log(eastEuropeanStandardTime);
// number 2
let timeBlahBlah = new Date("April 30/2024");
console.log("2024");
// number 3
const d = new Date("2024 March 17");
let month = d.getMonth();
console.log(month);
// number 4
const f = new Date("2024 May 15");
let day = f.getDate();
console.log(day);
// number 5
const g = new Date("2024 May 15");
let sdas = g.getDay();
console.log(sdas);
// number 6
let w = new Date("2024 May 15 1:28:50 PM");
let h = w.getHours();
let m = w.getMinutes();
let s = w.getSeconds();
console.log(`hours:${h},Minutes:${m},Seconds:${s}`);
// number 7
let l = new Date(2024, 3 + 1, 0);
let o = l.getDate();
console.log(o);

