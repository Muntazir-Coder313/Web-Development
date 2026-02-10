let num1=45;
let num2=7;
console.log("<<<<<<<<<<================== PROJECT ==================>>>>>>>>>>");
console.log("<<<<<<<================== CALCULATOR ==================>>>>>>>>>>");
console.log("Made by : Muntazir");
console.log("Number1 : "+num1);
console.log("Number2 : "+num2);



let operator= "+";

let operatorName;
if(operator==="+"){
    operatorName="Add";
}
else if(operator==="-"){
    operatorName="Subtract";
}
else if(operator==="*"){
    operatorName="Multiply";
}
else if(operator==="/"){
    operatorName="Divide";
}
else{
    operatorName="Invalid Operator";
}
console.log("Using Operator : "+operatorName);




switch (operator) {
    case "-":
        console.log("Answer : "+(num1-num2));
        break;
    case "+":
        console.log("Answer : "+(num1+num2));
        break; 
        case "*":
        console.log("Answer : "+(num1*num2));
        break;   
        case "/":
        console.log("Answer : "+(num1/num2));
        break;
    default:
      console.log("Invalid Operator");
        break;
}
