let person={
    names:"Muntazir",
    age:15,
    city:"New York"

}
console.log(person);
console.log(person.names);
console.log(person.city);

console.log("=======");

let {names, age, city} = person;
console.log(names);


let persons=[
    {
        names:"Muntazir",
        age:15,
        adress:{
            city:["skardu","Hilal","Par"],
            zip:[1203,1920,10209]
        }
    },
    {
        names:"MA",
        age:15,
        city:"Skardu"
    },
    {
        names:"AM",
        age:15,
        city:"Skardu"
    }
]
console.log(persons);


// const name="Muntazir";
// const age=15;
// const city="Skardu";
// const person1={
//     name:name,
//     age:age,
//     city:city
// }
// console.log(person1);


// let person2={
//     name:"MA",
//     age:15,
//     city:"Skardu",
// }
// console.log(person2);


// let person3={
//     name:"MA",
//     age:15,
//     city:"Skardu",
//     greet:function(){
//         console.log("Hello, my name is "+this.name);
//     }
// }
// person3.greet();


