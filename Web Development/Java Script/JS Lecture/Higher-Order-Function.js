// Function Composition
// function add(a){
//   return a+2;
// }
// function mul(a){
//   return a*3;
// }
// function compose(f ,g){
//   return function(a){
//     return f(g(a));
//   }
// }
// var result=compose(add,mul)(4);
// console.log(result);



// Currying
// function mul(a){
//   return function(b){
//     return a*b
//   }
// }
// var result=mul(9);
// console.log(result(7));




// Memorization
function memoize(func) {
    var cache = {};
    return function (arg) {
        if (cache[arg]) {
            return cache[arg];
        } else {
            var res = func(arg);
            cache[arg] = res;
            return res;
        }
    };
}
function slow(num) {
    console.log("Computing...");
    return num * 2;
}

var fast = memoize(slow);
console.log(fast(5)); // Computing... 10
console.log(fast(5)); // 10 (cached)