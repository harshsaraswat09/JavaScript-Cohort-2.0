// ✅ PURE & IMPURE FUNCTIONS
// 1. Pure Function

// 📌 Definition:
// Aisa function jiska same input hoga toh same output hoga,
// aur koi side-effects nahi karega (console, DOM change, database, API, global variable change etc.)

function addTwo(val) {
    return val + 2; // no console, no randomness, no global variable
}

console.log(addTwo(12));  // 14
console.log(addTwo(12));  // 14

// 2. Impure Function

// 📌 Definition:
// Same input dene ke baad bhi har baar different output de sakta hai
// ya side effects perform karta hai.

function randomAdd(val) {
    return Math.random() + val; 
}

console.log(randomAdd(12)); 
console.log(randomAdd(12));


// ✅ SCOPING IN JAVASCRIPT
// 1. Global Scope

// Variable jo function ke bahar likhe ho → kahin se bhi access ho sakte.

let a = 10;
function test(){
    console.log(a); // global a
}
test();

// 2. Function Scope

// Function ke andar banaya hua variable bahar access nahi hota.

function sample() {
    let b = 20;
}
console.log(b); // ❌ error


// ✅ CLOSURE (MOST IMPORTANT)

// 📌 Closure =
//  Closure -> ek function jo return karta hai function but returning function jo hai vo parent function ka var use karega

function abcd(){
    let a = 12;
    return function(){
        console.log(a)
    }
}

// ✅ ARRAYS
// What are Arrays?

// Ek variable me multiple values store karne ka tarika.

let arr = [1, 2, 3, 4, 5];

// Array Create Karne ke Ways

// Literal:
let arr = [1,2,3];
// Constructor:
let arr2 = new Array(1,2,3);

// Accessing Array Elements
let arr = [10, 20, 30, 40];
console.log(arr[2]); // 30


// ✅ ARRAY FUNCTIONS
// push()	    Add at end
// pop()	    Remove last
// shift()	    Remove first
// unshift()   Add at start
// indexOf()	Search index
// reverse()	Reverse array
// slice()	    Copy array portion
// sort()	    Sort array
// join()	    Convert to string
// toString()	Convert to string


High-Order Functions
Method	What it does
// map()	Return new array (transform)

// filter()	Return new array (conditions)

// reduce()	Return single value

// some()	Checks if any element matches

// spread operator (...)	Spread array


// 🔁 Array Iteration
// 1. For Loop

let arr = [1,2,3,4];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


// 2. forEach
arr.forEach(function(value){
    console.log(value);
});

// ✅ OBJECTS IN JAVASCRIPT
// Definition:

// Objects = Key–Value pairs
// (Real life entities ko represent karne ke liye perfect)

let person = {
    name: "Harsh",
    age: 27,
    email: "harsh@gmail.com",
};


// ✔ Accessing Object Properties
person.name
person["name"]

// ✔ Deleting Property
delete person.age;

// ✔ Nested Objects
// let obj = {
//     name: "Harsh",
//     socials: {
//         instagram: "abc",
//         facebook: "xyz"
//     }
// };