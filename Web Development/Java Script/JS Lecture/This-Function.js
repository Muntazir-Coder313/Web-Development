let persons=[
    {
        Names:"Ahmed",
        Age:25,
        City:"Skardu",
        Zip:1610,
        getresult:function(){
            return `Name:${this.Names},City:${this.City},Zip:${this.Zip};`
        }
    },
    {
        Names:"Bilal",
        Age:14,
        City:"Karachi",
        Email:"bilal@gmail.com",
        getresult:function(){
            return `Name:${this.Names},Email:${this.Email};`
        }
    },
    {
        Names:"Mazhar",
        Age:33,
        City:"Peshawar",
        Zip:27490,
        getresult:function(){
            return `Name:${this.Names},Age:${this.Age};`
        }
    }
]
persons.forEach(persons =>{
    if (persons.getresult) {
        console.log(persons.getresult());
        
    }
})


