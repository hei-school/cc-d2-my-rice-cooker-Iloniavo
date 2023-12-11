"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RiceCooker_1 = require("./RiceCooker");
var readlineSync = require("readline-sync");
function handleChoice(option, riceCooker) {
    switch (option) {
        case '1':
            riceCooker.plug();
            break;
        case '2':
            var newQuantityString = readlineSync.question('Enter rice quantity: ');
            var newQuantity = parseInt(newQuantityString) || 0;
            riceCooker.setQuantity(newQuantity);
            break;
        case '3':
            var newCookTimeString = readlineSync.question('Enter new cook time: ');
            var newCookTime = parseInt(newCookTimeString) || 0;
            riceCooker.setCookTime(newCookTime);
            break;
        case '4':
            var newWaterAmountString = readlineSync.question('Enter new water amount: ');
            var newWaterAmount = parseInt(newWaterAmountString) || 0;
            riceCooker.setWaterAmount(newWaterAmount);
            break;
        case '5':
            riceCooker.cookRice();
            break;
        case '6':
            console.log('Goodbye!!');
            process.exit();
        default:
            console.log('Invalid option');
    }
}
var riceCooker = new RiceCooker_1.RiceCooker();
while (true) {
    console.log('\n1. Plug in/out');
    console.log('2. Set rice quantity');
    console.log('3. Set cook time');
    console.log('4. Set water amount');
    console.log('5. Cook rice');
    console.log('6. Exit');
    var option = readlineSync.question('Choose an option: ');
    if (option === '6') {
        console.log('Goodbye!!');
        process.exit();
    }
    handleChoice(option, riceCooker);
}
