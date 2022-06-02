// 5 kyu
// Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word.Leave punctuation marks untouched.


function pigIt(str) {
  return str.replace(/\w+/g, letters => letters.slice(1) + letters[0] + 'ay')
}

// Examples
console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !