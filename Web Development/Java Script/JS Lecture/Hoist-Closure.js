// Hoisting
// a=23
// let a
// console.log(a);


// hello();
// var hello=function(){
//     console.log("hi");
    
// }


// console.log(a);
// var a=5;

// console.log(b);
// let b=23;


// greet();
// function greet(){
//     console.log("Hello,MA");
    
// }

// hello();
// var hello=function(){
//     console.log("hi");
    
// }

// function test(){
//     console.log(x);
//     let x=50;
    
// }
// test()

// var a=10;
// var a=20;
// console.log(a);


// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i); // 3, 3, 3
//     }, 100);
// }

// test(10);
// function test(num){
//     console.log(num);
    

// }

// function outer(){
//     console.log(a);
//     var a=2;
//     function inner(){
//         console.log(b);
//         var b=4;
        
//     }
//     inner()
// }
// outer()


// Closures


// function outer(){
//     let outerVar="I am in the outer space!";
//     function inner(){
//         console.log(outerVar);
//         outerVar="Updated"
        
//     }
//     return inner;
// }
// let Closures=outer();
// Closures();
// Closures();


// function counter(){
//     let count=0;
//     return function(){
//         count++
//         return count;
//     }
// }
// const increament=counter();
// console.log(increament());
// console.log(increament());
// console.log(increament());

// const counters=(function(){
//     let counts=0;
//     return{
//         increament:function(){
//             counts++;
//             console.log(counts);
            
//         },
//         reset:function(){
//             counts=0;
//             console.log("Counter Reset");
            
//         },
//     };
// })();
// counters.increament();
// counters.increament();
// counters.reset();


function createrTimers(){
    for (let i=0;i<=3;i++){
        setTimeout(function(){
            console.log(`Timer ${i}`);
        },i*1000)
    }
}
createrTimers();




