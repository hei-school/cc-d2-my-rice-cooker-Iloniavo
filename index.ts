import { RiceCooker } from './RiceCooker';
import * as readlineSync from 'readline-sync';

function handleChoice(option: string, riceCooker: RiceCooker): void {
  switch (option) {
    case '1':
      riceCooker.plug();
      break;
    case '2':
      const newQuantityString: string = readlineSync.question('Enter rice quantity: ');
      const newQuantity: number = parseInt(newQuantityString) || 0;
      riceCooker.setQuantity(newQuantity);
      break;
    case '3':
      const newCookTimeString: string = readlineSync.question('Enter new cook time: ');
      const newCookTime: number = parseInt(newCookTimeString) || 0;
      riceCooker.setCookTime(newCookTime);
      break;
    case '4':
      const newWaterAmountString: string = readlineSync.question('Enter new water amount: ');
      const newWaterAmount: number = parseInt(newWaterAmountString) || 0;
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

const riceCooker = new RiceCooker();

while (true) {
  console.log('\n1. Plug in/out');
  console.log('2. Set rice quantity');
  console.log('3. Set cook time');
  console.log('4. Set water amount');
  console.log('5. Cook rice');
  console.log('6. Exit');

  const option: string = readlineSync.question('Choose an option: ');

  if (option === '6') {
    console.log('Goodbye!!');
    process.exit();
  }

  handleChoice(option, riceCooker);
}