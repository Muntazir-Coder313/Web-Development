// try {
//   console.log("Start of the try block"); // This runs
//   lalala; // Error, 'lalala' is not defined (ReferenceError)
//   console.log("End of the try block (this will not run)");
// } catch (err) {
//   console.log("An error occurred!"); // This runs
//   console.error(err.name + ": " + err.message); // Logs "ReferenceError: lalala is not defined"
// }
// console.log("Script continues to run after error handling"); // This also runs


// try {
//   let result = 10 / 0;
//   console.log("Result:", result);
// } catch (error) {
//   console.log("Something went wrong!");
// }


// try {
//   console.log(myName); 
// } catch (error) {
//   console.log("Error found!");
//   console.log(error.message);
// }

// try {
//   let age = -5;

//   if (age < 0) {
//     throw new Error("Age cannot be negative!");
//   }

//   console.log("Age is valid");
// } catch (error) {
//   console.log("Custom Error:", error.message);
// }


// try {
//   console.log("Start");
//   let num = 8;
//   console.log(num);
// } catch (error) {
//   console.log("Error occurred",);
// } finally {
//   console.log("This always runs");
// }



// function divideNumbers(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero!");
//     }
//     return a / b;
//   } catch (error) {
//     return error.message;
//   }
// }

// console.log(divideNumbers(10, 2));  // 5
// console.log(divideNumbers(10, 0));  // Cannot divide by zero!



// try {
//   let data = '{"name":"Ahmed", "age":25}';
//   let user = JSON.parse(data);
//   console.log(user.name);
// } catch (error) {
//   console.log("Invalid JSON!");
// }


// try {
//   let data = '{"name":"Ahmed", "age":25; // Missing }'
//   let user = JSON.parse(data);
//   console.log(user.name);
// } catch (error) {
//   console.log("Error:", error.message);
// }



// function checkNumber(num) {
//   try {
//     if (isNaN(num)) {
//       throw new Error("This is not a number!");
//     }
//     console.log("Valid number:", num);
//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// }

// checkNumber(10);
// checkNumber("Hello");




// try {
//   let arr = [1, 2, 3];

//   if (!arr[5]) {
//     throw new Error("Index does not exist!");
//   }

//   console.log(arr[5]);
// } catch (error) {
//   console.log("Array Error:", error.message);
// }


function getUserName(user) {
  try {
    if (!user.name) {
      throw new Error("Name is missing!");
    }
    return user.name;
  } catch (error) {
    return error.message;
  }
}

console.log(getUserName({ name: "AM" }));
console.log(getUserName({}));