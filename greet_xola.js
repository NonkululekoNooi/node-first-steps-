const chalk = require('chalk');
//import the greet module that is in the current folder
let greet = require('./greet.js');

const figlet = require ('figlet')
// console.log(greet('zee'));
let message = greet('Makho');
var output =chalk.red(
    figlet.textSync( message, {horizontalLayout:'full'})
)
//const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(output)
