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

function login(username,password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username==="admin"&&password==="1234"){
                resolve("Login successful!");
            }
            else{
                reject("Invalid Username or Password");
            }
        }, 1000);
    })
}
login("admin","1234")
.then(message=>console.log(message))
.catch(error=>console.error(error));
