// write a higher order function runTwice(fn) that takes another function and executes it two times.

// function runTwice(fn) {
//     fn();
//     fn();
// }

// function sayHello() {
//   console.log("Hello!");
// }

// runTwice(sayHello);


// Create one pure function that always returns the same output for given input and one impure function using a global variable.

// function pureAdd(a, b) {
//     return a + b;
// }   
// pureAdd(2, 3); // always returns 5 for inputs 2 and 3

// let global = 0;
// function impure(a){
//     global++;
//     console.log(global + a);
// }


//Write a function that uses object destructuring inside parameters to extract and print name and age.

// function abcd({name, age}){
//     console.log(name, age);

// }

// abcd({name: "Harsh", age: 22, city: "Bhopal"});


// Demonstrate the difference between normal function and arrow function when used as objects methods (this issue)

// let obj = {
//     name: "Harsh",
//     age: 22,
//     fnc: function(){
//         console.log(this); // obj
//     },
//     fnc2: ()=>{
//         console.log(this);
//     }
// }
// obj.fnc();
// obj.fnc2(); // window object or undefined in strict mode


// Given an Array of numbers , use map() to create a new array where each numbers is squared.

// let nums = [1, 2, 3, 4, 5];
// let arr = nums.map(function(val){
//     return val * val;   
// })

// console.log(arr); 

// Use filter() to get only even numbers from an array of numbers.

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arr = nums.filter(function(val){
//     return val % 2 === 0;
// })

// console.log(arr);

// Use reduce () to find the total salary from an array of numbers [1000, 2000, 3000, 4000]. 

// let salary = [1000, 2000, 3000, 4000];

// let total = salary.reduce(function(acc, val){
//     return acc + val;
// }, 0)

// console.log(total);


// Create an array of names and use some() and every() to test a condition (e.g., all names longer than 3 characters).

// let names = ["harsh" , "avinya" , "chulbul", "ajay", "nishi"];

// let ans = names.some(function(val){
//     return val.length > 3;
// })
// console.log(ans); // true


// Create an Object user and test the behavior of Object. freeze() and Object.seal() by adding/changing keys.

// let user = {
//     name: "Harsh",
//     age: 22,
//     email: "harsh@h.com"
// };

// Object.freeze(user);


// Create a nested Object (user -> address -> city) and access the city name inside it.

// let obj = {
//     user: {
//         name: "Harsh",
//         address:{
//             city: "Bhopal"
//         },
//     },
// };


// let {city} = obj.user.address;