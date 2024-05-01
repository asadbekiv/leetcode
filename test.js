let letters = [..."Hello world"];

console.log(letters);
let string = "";
for (let letter of letters) {
  string += letter;
}
console.log(string);

let everyother = "";
for (let [index, letter] of letters.entries())
  if (index % 2 === 0) everyother += letter;
console.log(everyother);

let myArray = []; // Creating an empty array

myArray = myArray.concat("apple"); // Concatenating "apple" to the array
myArray = myArray.concat("banana"); // Concatenating "banana" to the array
myArray = myArray.concat("orange"); // Concatenating "orange" to the array

console.log(myArray);
