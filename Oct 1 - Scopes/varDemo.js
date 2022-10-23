//gives error because var is function scoped
function fun() {
  var x = 10;
  console.log("function Scope of var x", x);
}
//because var is function scoped and consider block as global scope
{
  //   var a = 10;
  //   console.log("Block Scope of var a", a);
}

// console.log(a);

function fun2() {
  console.log("function Scope of var x", x);
  var x = 10;
  console.log("function Scope of var x", x);
}

// fun2();

{
  var y = 8; // becomes global due to var
}

// console.log("Block Scope of var y", y);

if (true) {
  var z = 30;
}
if (false) {
  var a = 20;
}

console.log(z);
console.log(a);
