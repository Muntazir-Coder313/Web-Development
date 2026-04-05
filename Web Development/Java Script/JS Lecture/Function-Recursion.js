// let num = 5;
// let result = 1;
// let expression = "";

// for (let i = 1; i <= num; i++) {
//     result *= i;
//     expression += i;

//     if (i < num) {
//         expression += " * ";
//     }
// }

// console.log(num + "! = " + expression);
// console.log("Answer = " + result);

function factorial(n){
    if(n===1){
        return 1;
    }
    return n*factorial(n-1);
}
console.log(factorial(3));

