// let students=[
//     {
//         names:"ali",
//         marks:{
//         sc:75,
//         mt:85,
//         ud:65
//         },
//         gm:function(){
//             let totl=this.marks.sc+this.marks.mt+this.marks.ud;
//             const tto=300;
//             let perc=(totl/tto)*100;
//             return `name:${this.names} | tm:${tto} | om:${totl} | per:${perc.toFixed(2)}%;`
//         }
        
//     }
// ]
// students.forEach(students=>{
//     console.log(students.gm());
    
// })
let students=[
    {
        Names:"Muhammad",
        Marks:{
            Math:80,
            Computer:90,
            Urdu:40,
            Isl:45,
            English:75
        },
        generateMarkSheet:function(){
            let Obtain=this.Marks.Computer+this.Marks.English+this.Marks.Urdu+this.Marks.Isl+this.Marks.Math;
            const Total=400;
            let Percentage=(Obtain/Total)*100
            return `Name:${this.Names} | Total Marks:${Total} | Obtained Marks:${Obtain} | Percentage:${Percentage.toFixed(2)}%`
        }
    },

    {
        Names:"Ali",
        Marks:{
            Math:80,
            Computer:70,
            Urdu:45,
            Isl:35,
            English:75
        },
        generateMarkSheet:function(){
            let Obtain=this.Marks.Computer+this.Marks.English+this.Marks.Urdu+this.Marks.Isl+this.Marks.Math;
            const Total=400;
            let Percentage=(Obtain/Total)*100
            return `Name:${this.Names} | Total Marks:${Total} | Obtained Marks:${Obtain} | Percentage:${Percentage.toFixed(2)}%`
        }
    },

    {
        Names:"Hussain",
        Marks:{
            Math:85,
            Computer:60,
            Urdu:30,
            Isl:50,
            English:80
        },
        generateMarkSheet:function(){
            let Obtain=this.Marks.Computer+this.Marks.English+this.Marks.Urdu+this.Marks.Isl+this.Marks.Math;
            const Total=400;
            let Percentage=(Obtain/Total)*100
            return `Name:${this.Names} | Total Marks:${Total} | Obtained Marks:${Obtain} | Percentage:${Percentage.toFixed(2)}%`
        }
    },

    {
        Names:"Hassan",
        Marks:{
            Math:100,
            Computer:60,
            Urdu:47,
            Isl:40,
            English:90
        },
        generateMarkSheet:function(){
            let Obtain=this.Marks.Computer+this.Marks.English+this.Marks.Urdu+this.Marks.Isl+this.Marks.Math;
            const Total=400;
            let Percentage=(Obtain/Total)*100
            return `Name:${this.Names} | Total Marks:${Total} | Obtained Marks:${Obtain} | Percentage:${Percentage.toFixed(2)}%`
        }
    }
]
students.forEach(students=>{
    console.log(students.generateMarkSheet());
    
})