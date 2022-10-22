// arithmetic operators
console.log(10 + 2); // addition
console.log(10 - 2); // subtraction
console.log(10 * 2); // multiplication
console.log(5 / 2); // division
console.log(10 % 2); // remainder


// Note if we want to have floor divisions
// 1 way -> parseInt(5/2)
// 2 way -> Math.floor(5/2)


// assignment operators
let x = 10; // assigning the value 10 to the variable x
x += 2; // x = x + 2 
x -= 2; // x = x-2;
x *= 2; // x = x*2;
x /= 2; // x = x / 2
x %= 2; // x = x % 2 


let p =  console.log;
// logical operators
p((10>5)&&(7<6));
p((10>5)|| (7<6));
p(4 && 0); // 0
p(4 ||  0);  // 4
p(0 &&  4); // 0
p(0 ||  4);  // 4
p(-4 ||  5);  // -4 short circuting returns first truthy value
