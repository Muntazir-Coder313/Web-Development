let numbers = [10, 20, 30, 40, 50];
let result = numbers.slice(1, 4);
console.log(result);


let number = [10, 20, 30, 40, 50];
number.splice(1, 2);
console.log(number);


let numbe = [10, 20, 50];
numbe.splice(2, 0, 30, 40);
console.log(numbe);

let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
let new_cars = cars.slice(1, 4);
console.log("cars :", cars);
console.log("new_cars :", new_cars);



let car = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
car.splice(2, 0, 'ambassedor', 'BMW', 'Audi');
console.log("cars :", car);


let a=[1,2,3,4,5]
let b=a.slice(0,3);
console.log(b)
