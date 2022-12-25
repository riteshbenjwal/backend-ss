#!/usr/bin/env node

/*shebang line used in script files to execute commands with the Bash shell*/

console.log("Hello world");

console.log(process.argv);

console.log(process.argv[2].split("=")[1]);
