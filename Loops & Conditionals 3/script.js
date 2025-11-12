// 11. Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”

// let attempts = 0;

// let sahipassword = "harsh";

// let userInput = prompt("Enter your password:");

// attempts++;

// while (sahipassword !== userInput) {
//     if (attempts === 3) {
//         console.error("Account locked");
//         break;
//     }
//     userInput = prompt("apna password batao");
//     attempts++;
// }


// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".


// let word = prompt("word bolo:");

// let counter = 0;

// while (word !== "stop") {
//     if (word === "yes") {
//         counter++;
//     }
//     word = prompt("word bolo:");
// }

// console.log(`You said "yes" ${counter} times`);


// 13. Print numbers divisible by 7 from 1 to 50
// Use modulo % and loop.

// for(let i = 1; i <= 50; i++) {
//     if (i % 7 ===0) {
//         console.log(i);
//     }
// }



// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

// let sum = 0;
// for(let i = 1; i <= 30; i++) {
//     if (i % 2 !== 0) {
        
//         sum = sum + i;
        
//     }
// }
// console.log(sum);


// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.

// let num = prompt("Enter a number:");

// num = Number(num);
// while (num % 2 !== 0) {
//     num = prompt("Enter a number:");
//     num = Number(num);
// }


// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between.

// let start = prompt("Enter starting number:");
// let end = prompt("Enter ending number:");
// start = Number(start);
// end = Number(end);  

// for (let i = start; i <= end; i++) {
//     console.log(i);
// }


// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.


// let counter = 0;

// for (let i = 1; i<21; i++) {
//     if (counter === 3) {
//         break;
//     }
//     if (i % 2 !== 0) {
//         console.log(i);
//         counter++;
//     }
// }


// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.


