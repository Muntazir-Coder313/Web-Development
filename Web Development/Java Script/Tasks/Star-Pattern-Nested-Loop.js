// Square Star Pattern
console.log("======================Square Star Pattern======================");
for(let i=4;i>=1;i--){
    let str='';
    for(let j=4;j>=1;j--){
        str +='*'
    }
    console.log(str);
    
}



// Triangle Star Pattern
console.log("======================Triangle Star Pattern======================");
for(let i=1;i<=5;i++){
    let str = '';   
    for(let j=1;j<=i;j++){
        str += '*';
    }  
    console.log(str);
}


// Space star Pattern
console.log("====================== Space star Pattern ======================");
for(let i=1;i<=5;i++){
    let str='';
    for(let j=1;j<=5;j++){
        // str +='*';
        if(i==1 || i==5 || j==1 || j==5){
            str +='*';
        }
        else{
            str +=' ';
        }
    }
    console.log(str);
    
}



// Reverse Triangle Star pattern
console.log("======================Reverse Triangle Star Pattern======================");
for(let i=5;i>=1;i--){
    let str = '';
    for(let j=1;j<=i;j++){
        str += '*';
    }   
    console.log(str);
}



console.log(" ======================Pyramid star Pattern======================");
for(let i=1;i<=5;i++){
    let str = '';   
    for(let j=1;j<=5-i;j++){
        str += ' ';
    }
    for(let k=1;k<=i;k++){ 
        str += '* ';
    }
    console.log(str);
}



console.log("====================== Reverse Pyramid star Pattern ====================== ");
for(let i=5;i>=1;i--){
    let str = '';   
    for(let j=1;j<=5-i;j++){
        str += ' ';
    }
    for(let k=1;k<=i;k++){ 
        str += '* ';
    }
    console.log(str);
}


console.log(" ====================== Diamond star Pattern======================");
for(let i=1;i<=4;i++){
    let str = '';   
    for(let j=1;j<=4-i;j++){
        str += ' ';
    }
    for(let k=1;k<=i;k++){ 
        str += '* ';
    }
    console.log(str);
}
for(let i=4;i>=1;i--){
    let str = '';   
    for(let j=1;j<=4-i;j++){
        str += ' ';
    }
    for(let k=1;k<=i;k++){ 
        str += '* ';
    }
    console.log(str);
}



