console.log("================================ For Loop ================================");

console.log("======== Increament ========");

for (let i = 0; i <10; i++) {
    console.log(i);
    }

console.log("======== Decreament ========");
for (let i = 10; i >0; i--) {
    console.log(i);
      
}

console.log("======== Table of 2 ========");
let a=2
for(let i=1;i<=10;i++){
    // console.log(a,"x",i,"=",a*i);
    console.log( `${a} X ${i} = ${a*i}` );
     
}

console.log("======== Odd & Even Number ========");
for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}

console.log("======== Break Statement ========");
for(let i=1;i<=10;i++){
    if(i==3){
        break
    }
    console.log(i);
    
}

console.log("======== Continue Statement ========");
for(let i=1;i<=10;i++){
    if(i==3 || i==4 || i==6){
        continue
    }
    console.log(i);
    
}



console.log("======== Continue Statement ========");
for(let i=1;i<=10;i++){
    if(i%2==0){
        continue
    }
    console.log(i);
    
}