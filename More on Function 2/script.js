// Write a function sayHello() that prints "Hello JavaScript"

// function sayHello(){
//     console.log("Hello JavaScript");
// }

// sayHello()

// Create a function that takes two numbers as parameters and returns their sum

// function add(a,b){
//     return a+b;
// }
// let ans = add(1,2)
// console.log(ans)

// Write a function with a default parameter name = "Guest" that prints "Hi, <name>!"

// function greet(guest = "Guest"){
//     console.log(`hi ${guest}`);
// }

// greet("Harsh")


// Use rest parameters to make a function that adds unlimited numbers

// function addunlimited(...num){
//     let sum = 0;
//     num.forEach(function(val){
//         sum = sum + val; 
//     })
//     console.log(sum)
// }
// addunlimited(1,2,3,4,5) 


// Create an IIFE that prints "I run instantly!"

// (function(){
//     console.log("I run instantly!");
// })()

// Make a nested function where the inner function one prints a variable from the outer function.

// function parent(){
//     let a = 12;
//     function child(){
//         console.log(a);
//     }
//     child();
// }
// parent();

// Create an array of 5 fruits. add one at the end and remove one from the start.

// let fruits = ["apple" , "banana" , "mango" , "grapes" , "orange"];
// fruits.push("kiwi");
// fruits.shift();
// console.log(fruits);


// use a for loop to print all the fruits in the array

// let fruits = ["apple" , "banana" , "mango" , "grapes" , "orange"];
// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// create an object 'person' with properties name, age and a method greet() that prints each keys value

// let person = {
//     name : "Harsh",
//     age : 20,
//     city: "bhopal"
// };

// for(let key in person){
//     console.log(person[key]);
// }

// use setTimeout to print "Time's up" after 2 seconds

// setTimeout(function(){
//     console.log("Time's up");
// },2000);