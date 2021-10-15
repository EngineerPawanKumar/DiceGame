//Assignment 2

//Polyfill for reverse()

var myArray = [14, 69, 420, 666];
var revMyArr = [].concat(myArray).reverse();
console.log(revMyArr);
// > Array [666, 420, 69, 14]  -Expected Result

//Polyfill for join()

const elements = ['So', 'Beautiful', 'Cute', 'Girl'];

console.log(elements.join());
// expected output: > "So,Beautiful,Cute,Girl"

console.log(elements.join(''));
// expected output: > "SoBeautifulCuteGirl"

console.log(elements.join('-'));
// expected output: > "So-Beautiful-Cute-Girl"



//Polyfill for split()

const myString = 'How are you bro'
const splits = myString.split(' ', 4)
console.log(splits)

// expected output: > Array  ['How', 'are', 'you', 'bro']
