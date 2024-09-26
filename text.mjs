import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let num1 = parseFloat(await userInput.question('voor uw eerste getal?'));

let num2 = parseFloat(await userInput.question('voor uw eerste getal?'));

if(num1 > 0 && num2 > 0){
    console.log('beide getallen zijn positief');
} else if (num1 > 0 && num2 < 0){
    console.log('Het eerste getal is positief en het tweede getal is negatief.')
} else if(num1 < 0 && num2 >= 0 ){
    console.log('Het eerste getal is negatief en het tweede getal is positief.')
} else if(num1 < 0 && num2 < 0){
    console.log('beide getall zijn negatief')
} else if (num1 == 0 || num2 == 0){
    console.log('Eén van de getallen is nul.')
}




process.exit()