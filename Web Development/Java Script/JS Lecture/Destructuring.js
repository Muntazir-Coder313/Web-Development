// // Array Destructuring
// // Destructuring Assignment: This allows you to unpack values from arrays or properties from objects into distinct variables. It provides a concise syntax for extracting values.
// let car=["tesla","audi","bmw","mercedes" ,"volvo","ford","honda","toyota"];
// // console.log(car[0]);
// let  [tesla,audi,bmw,mercedes,...reminingcar]=car;
// console.log(reminingcar);


// // Skipping Values: Use commas to skip unwanted elements.
// const fruits = ['Bananas', 'Oranges', 'Apples', 'Mangos'];
// const [fruit1,  , fruit2] = fruits;
// // fruit1 is 'Bananas', fruit2 is 'Apples'
// console.log(fruit1);
// console.log(fruit2);


// // Rest Operator: Use the rest syntax (...) to gather the remaining elements into a new array. It must be the last element in the pattern.
// const numbers = [10, 20, 30, 40, 50];
// const [a, b, ...rest] = numbers;
// // a is 10, b is 20, rest is [30, 40, 50]
// console.log(a);
// console.log(b);
// console.log(rest);


// Swapping Variables: A classic use case is swapping variable values without a temporary variable.
// let firstName = 'John';
// let lastName = 'Doe';
// [firstName, lastName] = [lastName, firstName];
// // firstName is 'Doe', lastName is 'John'
// console.log(firstName);
// console.log(lastName);


// Object Destructuring
// Basic Assignment:
// const person = { firstName: 'John', lastName: 'Doe', age: 50 };
// const { firstName, age } = person;
// // firstName is 'John', age is 50
// console.log(firstName);
// console.log(age);

// // Assigning to New Variable Names (Aliasing): Use a colon (:) to assign the property value to a variable with a different name.
// const { lastName: surname } = person;
// // surname is 'Doe'
// console.log(surname);

// // Default Values: Provide a default value using the assignment operator (=) if the property is missing or undefined.
// const { country = 'Norway' } = person;
// // country is 'Norway' because it doesn't exist in the person object
// console.log(country);

// Nested Destructuring: Extract values from deeply nested objects.
const user = { details: { names: 'Alice', age: 28 } };
const { details: { names } } = user;
// name is 'Alice'
console.log(names);





