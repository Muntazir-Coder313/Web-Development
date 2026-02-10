// Conditional Grading System
console.log("==================Result  Card==================");
console.log("Name : Muntazir");
let grade="Grade";
let marks= 60;
if(marks>=95 && marks<=100){
    console.log("Grade : A++");
    console.log("Remarks : Welldone");
    
}
else if(marks>=90 && marks<=95){
    console.log("Grade : A+");
    console.log("Remarks : Exellent");

}
else if(marks>=80 && marks<=90){
    console.log("Grade : B");
    console.log("Remarks : Good");

}
else if(marks>=70 && marks<=80){
    console.log("Grade  : C");
    console.log("Remarks : Nice");

}
else if(marks>=60 && marks<=70){
    console.log("Grade  : D");
    console.log("Remarks : Need Improvement");

}
else{
    console.log("Position : Fail");
    console.log("Remarks : Very Poor & Need Extra Hardwork");

    
}