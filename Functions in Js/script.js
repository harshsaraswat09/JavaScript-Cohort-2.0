// 🟦 Understanding Functions in JavaScript

// ✅ What is a function?
// Functions help reuse code.
// A function runs only when you call it.
// Makes code clean, modular, and maintainable.

function greet() {
    console.log("Hello!");
}
greet();


// 🟩 Parameters vs Arguments
// Parameters

// Variables written inside function brackets.

function abcd(age, name) {  // parameters
}

// Arguments

// Values we pass while calling the function.
abcd(12, "harsh");  // arguments


// 🟧 Rest Parameters ( ... )

// Lets you capture multiple arguments into an array.
function abcd(a, b, ...c) {
    console.log(a, b, c);
}

abcd(1,2,3,4,5,6);
// Output: 1 2 [3,4,5,6]


// 🟥 Hoisting
// Hoisting = using something before it is declared

// JavaScript automatically moves:

// var declarations

// function declarations

// to the top of their scope.

// ✔ Variable Hoisting
console.log(a); // undefined
var a = 10;

// ✔ Function Hoisting
greet();   // Works!
function greet() {
    console.log("Hello");
}


🟦 Types of Parameters in JavaScript
// 1️⃣ Required Parameters

// If you don’t pass arguments → they become undefined.

function abcd(a, b, c, d) {
    console.log(a, b, c, d);
}

abcd();  
// undefined undefined undefined undefined

// 2️⃣ Destructured Parameters

// Used when passing objects.
function abcd({name, age}) {
    console.log(name, age);
}

abcd({name: "harsh", age: 27});


// 3️⃣ Rest Parameters
function abcd(...val) {
    console.log(val);
}
abcd(1,2,3,4);


// 4️⃣ Default Parameters

// When you don’t pass a value, default is used.

function abcd(a = 0, b = 0, c = 0) {
    console.log(a, b, c);
}

abcd(1,2);


// 🟩 Arguments in JavaScript
// 1️⃣ Positional Arguments

// Order matters.

function abcd(a,b,c,d) {
    console.log(a,b,c,d);
}
abcd(1,2,3,4);

// 2️⃣ Default Arguments — same as default parameters
function abcd(a = 1) {
  console.log(a);
}
abcd();

// 3️⃣ Spread Arguments

// Spread breaks an array into individual values.

function abcd(a,b,c){
    console.log(a,b,c);
}

let arr = [1,2,3];
abcd(...arr);

// 🟪 Classic Function + Nested Function + Scope Chain
// Classic Function

function abcd(){
    console.log("Hello");
}


// Nested Function
function abcd(){
    function defg(){
        console.log("chal jao");
    }
    defg();
}
abcd();

// Scope Chain

// Inner function can access outer variables.

let a = 12; // global

function abcd(){
    let b = 13;
    function defg(){
        console.log(b); // inner function accessing outer variable
    }
    defg();
}
abcd();

// 🟨 IIFE (Immediately Invoked Function Expression)
// Runs immediately after its creation.

(function() {
    console.log("IIFE executed");
})();


// ✔ Used to create private variables
// ✔ Avoid global pollution


// 🟥 More Functions Concepts


// 1️⃣ Arrow Function

let fnc = () => {
    console.log("heyheyheyehey");
}
fnc();

// 2️⃣ Fat Arrow = Arrow Function

// Same thing.

// 3️⃣ Anonymous Function

// A function without a name.

function() {
    console.log("no name");
}


// Mostly used inside callbacks.


// 4️⃣ Higher Order Function (HOF)

// A function that:

// returns another function
// or

// takes another function as argument

function outer(){
    return function(){
        console.log("inner");
    }
}


function abcd(a){
}
abcd(function(){});


// 5️⃣ Callback

// A function passed as an argument to another function.

function abcd(callback){
   callback();
}
abcd(function(){ console.log("callback chal gaya") });

// 6️⃣ First-Class Functions

// JavaScript treats functions like variables.

// ✔ You can store them in variables
// ✔ Pass them as arguments
// ✔ Return them

// This is why JS is powerful.~