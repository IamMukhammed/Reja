// Module package CORE
let number = 0;
const intervalId = setInterval(function() {
    console.log("hisob", number);
    number++;
    if (number > 10) { // Stop after reaching 10
        clearInterval(intervalId);
    }
}, 100);

/* const fs = require('fs');
fs.readFileSync('./input.txt', 'utf8');
console.log(data);
*/

console.log('<------------------------>');

const fs = require("fs");
const { networkInterfaces } = require("os");
const data = fs.readFileSync("./input.txt", "utf8");
console.log(data);

fs.writeFileSync('./input.txt', `${data} \n\t\t by Eden`);
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);


// Module package EXTERNAL
const moment = require('moment');
const time = moment().format('YYYY-MM-DD');
console.log(time);


const moment = require("moment");
const time2 = moment().format();

setInterval();(() => {
    console.log(`hozirgi vaqt: ${time}`);
}, 5000);

console.log("***************************");

const inquirer = require('inqurer');
inquirer
    .prompt([{type: 'input', name: 'raqam', message: "raqamni kiriting" }])
    .then((answer) => {
        console.log("man kiritgan raqam qiymati: ", answer.raqam);
        })
    .catch((err) => console.log(err));


console.log("<------------------------------->");

const validator = require("validator");
// const test = validator.isEmail("foo@bar.com");
const test = validator.isInt("ab");
console.log("test:", test);

const { v4: uuidv4 } = require('uuid');
const random = uuidv4();
console.log("random:", random)

const chalk = require('chalk');
const log = console.log;

log(chalk.backgroundColorNames('Hello') + random + chalk.foregroundColorNames('!'));


// Module package FILE

// const calculate = require("./hisob.js");

// const natija = calculate.kopaytirish(80, 20);
// console.log("Natija", natija);
// console.log("**********************");

// const natija2 = calculate.qoshish(70, 20);
// console.log("Natija", natija2);
// console.log("**********************");

// const natija3 = calculate.ayrish(80, 10);
// console.log("Natija", natija3);
// console.log("**********************");

// console.log(require("module").wrapper);

/* '(function (exports, require, module, __filename, __dirname) { ',
  '\n});'
*/

// onsole.log(arguments);
const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("*******************************");

const myAccount = new Account('Eden', 200000, 9879828698);
myAccount.giveMeDetails();

myAccount.makeDeposit(9000000);
myAccount.withdrawMoney(240000000);
myAccount.withdrawMoney(25000);
