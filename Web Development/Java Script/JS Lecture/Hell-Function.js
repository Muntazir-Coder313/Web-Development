// const std={
//     name:"AM",
//     age:21,
//     course:" IT",
//     display:function(){
//         console.log(this.name+" is studying" + this.course);
        
//     }
// }
// // std.display();
// std.display();


// function add(x){
//     return x+2;
// }
// function mul(x){
//     return x*3;
// }
// function compose(mul,add){
//     return function(x){
//         return add(mul(x));
//         // add(parameter) mul(12) add(mul(4))
//         return mul(add(x));
//         // add(6) mul(18) add(mul(4))
//     };
// }
// var res=compose(mul,add)(4);
// console.log("the result is:"+ res);


// function sm(){
//     console.log("this is sum function");
// }
// sm();


// function greet(name,callback){
//     console.log("Hello,"+name);
//     callback();
// }
// function  sayGoodbye(){
//     console.log("Goodbye!");
    
// }
// greet("ali",sayGoodbye);
// function hi(name,callbackfunction){
//     console.log("hi "+name);
//     callbackfunction();
// }
// function parameterfunction(){
//     console.log("bye");
    
// }
// hi("ali",parameterfunction)


function hellfunction(callback){
    console.log("this is hell function 1");
    callback();
    
}
function hellfunction2(callback){
    console.log("this is hell function 2");
    callback();
    
}
function hellfunction3(callback){
    console.log("this is hell function 3");
    callback();
}
function parameterfunction(){
    console.log("this is parameter function");
    
}

console.log("=====1");

hellfunction(function(){
    hellfunction2(function(){
        hellfunction3(function(){
            parameterfunction();
        })
    })
})

console.log("=====2");

hellfunction3(function(){
    hellfunction2(function(){
        parameterfunction();
    })
})

console.log("====3");

hellfunction2(function(){
    hellfunction(function(){
    })
})