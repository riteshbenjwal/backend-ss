let a = "10";
let b = "abc";
let c = "sanket";
let d = 10 - c;
console.log(a, b, c, d);

//Return true for non coercible values to number

console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));

let x = "";
console.log(x);
console.log(typeof x == "number" && isNaN(x) ? "NaN value" : "Not NaN value");
