import promptSync from 'prompt-sync';
import morseCode from './morse-code.json' assert { type: 'json' };

const prompt = promptSync();
const morseObj = { ...morseCode };
let morseString = prompt("Enter the morse code ::");
let morseArray = morseString.split(" ");
let finalStr = '';
for(let s of morseArray){
	let value = Object.keys(morseObj).find(key => morseObj[key] === s);
	finalStr += value
}

console.log(finalStr);

