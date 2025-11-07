// ✅ Conditionals in JavaScript

// Programming often requires making decisions — choosing between Option A or Option B based on some condition.
// For this, JavaScript gives us conditional statements.


// 🧠 Types of Conditional Statements
// 1️⃣ if Statement

// Runs only when the condition is true.

let age = 18;
if(age >= 18){
    console.log("You can vote ✅");
}


// 2️⃣ else Statement

// Runs when the if condition is false.

let age = 16;
if(age >= 18){
    console.log("You can vote");
} else {
    console.log("You cannot vote ❌");
}


// 3️⃣ else-if Ladder

// Used when you have multiple conditions.

let marks = 75;

if(marks >= 90){
    console.log("Grade A");
} else if(marks >= 75){
    console.log("Grade B");
} else if(marks >= 50){
    console.log("Grade C");
} else {
    console.log("Fail");
}


// 4️⃣ Ternary Operator (Short form of if-else)

let age = 20;
age >= 18 ? console.log("Adult") : console.log("Minor");
