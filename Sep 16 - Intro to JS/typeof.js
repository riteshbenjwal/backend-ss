let x = console.log;

x(typeof 9);
x(typeof 'a');
x(typeof -0);
x(typeof undefined);
x(typeof null); // corner case returns object
x(typeof {'name' : 'ritesh'})
x(typeof NaN); // special type of number - non availabity of number

x(typeof Symbol());