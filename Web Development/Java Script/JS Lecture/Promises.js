// const myPromise=new Promise((resolve, reject) => {
//     const success=true;
//     if(success){
//         resolve("Promise resolved successfully!");
//     }
//     else{
//         reject("Promise rejected")
//     }
// });

// myPromise
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

// function login(username,password){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(username==="admin"&&password==="1234"){
//                 resolve("Login successful!");
//             }
//             else{
//                 reject("Invalid Username or Password");
//             }
//         }, 1000);
//     })
// }
// login("admin","1234")
// .then(message=>console.log(message))
// .catch(error=>console.error(error));


// let objpromis=new Promise((resolve, reject) => {
//     let obj={
//         name:"Muntazir",
//         age:"21",
//         email:"muntu@gmail.com"
//     }
//     resolve(obj);
//     reject("Error fetching data");
// });
// objpromis
// .then(data=>console.log(data))
// .then(data=>console.log("Data fetched successfully!"))
// .catch(error=>console.log(error))


const fetchData=new Promise((resolve, reject) => {
    setTimeout(() => {
        const data={
            name:"MA",
            age:"21",
            email:"muntuMA@gmail.com"
        }
        resolve(data);
    }, 2000);
});

fetchData
.then(data=>console.log(data.name))
.then(data=>console.log("Data fetched successfully!"))
.catch(error=>console.log(error))