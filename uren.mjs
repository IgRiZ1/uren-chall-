import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagen 
let uren 
let minuten
let seconden 
let aantalseconden

dagen = parseFloat(await userInput.question('geeft aantal dagen? '));
uren = parseFloat(await userInput.question('geeft aantal uren? '));
minuten = parseFloat(await userInput.question('geeft aantal minuten? '));
seconden = parseFloat(await userInput.question('geeft aantal seconden? '));

let secdagen = (dagen *24 * 60 *60)
let securen = (uren * 60 *60)
let secminuten =  (minuten * 60)
aantalseconden = secdagen + secminuten + securen + seconden



console.log("aantal seconden :"+'',aantalseconden)




