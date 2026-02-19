// Rest
function add(a,b,...args){
    let sum=a+b;
    for(let i of args){
        sum+=i
    }
    return sum;
}
console.log(add(10,20,30,30));




// In Function Parameters
function sum(...numbers) {
  return numbers;
}

console.log(sum(1, 2, 3, 4));




// With Normal Parameter
function user(name, ...skills) {
  console.log(name);
  console.log(skills);
}

user("Ali", "JS", "HTML", "CSS");



// Count Total Arguments
function countArgs(...args) {
  return args.length;
}

console.log(countArgs(10, 20, 30, 40));



// Find Maximum Number
function findMax(...numbers) {
  return Math.max(...numbers);
}

console.log(findMax(5, 9, 2, 15, 3));




// Array Destructuring
let numbers = [1, 2, 3, 4, 5];

let [first, second, ...remaining] = numbers;

console.log(first);      // 1
console.log(remaining);  // [3,4,5]




// Spread
// Expanding Array into Function
function multiply(a, b, c) {
  return a * b * c;
}

let nums = [2, 3, 4];

console.log(multiply(...nums));


// Copy Array
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);


// Merge Arrays
let a = [1, 2];
let b = [3, 4];

let c = [...a, ...b];

console.log(c);





// Add More Values
let arr = [1, 2, 3];

let newArr = [...arr, 4, 5];

console.log(newArr);



// Copy Object
let users = {
  name: "Ali",
  age: 22
};

let newUsers = { ...users };

console.log(newUsers);



// Update Object Without Changing Original
let product = {
  name: "Laptop",
  price: 500
};

let updatedProduct = {
  ...product,
  price: 600
};

console.log(updatedProduct);



// Convert String to Array
let names = "Ali";

let letters = [...names];

console.log(letters);


