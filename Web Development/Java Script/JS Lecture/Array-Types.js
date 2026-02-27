console.log("============ Join ============");

let fruits=['apple','banana','cherry','date'];
console.log("standard join:",fruits.join());
console.log("custom join:",fruits.join('-'));
console.log("no-space join:",fruits.join(''));

console.log("============ Reverse ============");
const numbers=[1,2,3,4,5];
console.log("Origial:",numbers);
numbers.reverse()
console.log("Reverse:",numbers);

console.log("============ ToReversed ============");
var colors=['red','green','blue'];
const reverseColors=colors.toReversed();
console.log("Original Array:",colors);
console.log("New Array:",reverseColors);


console.log("============ The String Reversal Trick ============");
const word = "JavaScript";
const reverseword = word.split("").reverse().join("");
console.log(`"${word}" backward is "${reverseword}"`);




console.log("============ Common Properties ============");
// Lenght
let tech=['HTML','CSS','JS']
console.log("Lenght:",tech.length);

// Sort
console.log("Sorted:",[...tech].sort());

// Includes
console.log("Includes:",[...tech].includes('JS'));







