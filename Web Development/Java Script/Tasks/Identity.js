let persons=[
    {
        Names:"Ahmed",
        Age:25,
        City:"Skardu",
        Zip:16100
    },
    {
        Names:"Bilal",
        Age:14,
        City:"Karachi",
        Zip:19320
    },
    {
        Names:"Mazhar",
        Age:33,
        City:"Peshawar",
        Zip:27490
    },
    {
        Names:"Haider",
        Age:16,
        City:"Punjab",
        Zip:35196
    },
    {
        Names:"Ahsan",
        Age:10,
        City:"Lahore",
        Zip:57489
    },
    {
        Names:"Ali",
        Age:26,
        City:"Islamabad",
        Zip:27489
    },
    {
        Names:"Zaheer",
        Age:24,
        City:"KPK",
        Zip:15689
    },
    {
        Names:"Muneeb",
        Age:14,
        City:"Gilgit",
        Zip:34628
    }
]
// console.log(persons);
let map=persons.map((persons)=>persons.Names)
console.log(map);

let filter=persons.filter((persons)=> persons.Age>23)
// console.log(filter);



