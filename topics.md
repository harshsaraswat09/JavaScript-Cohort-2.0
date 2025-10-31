// 📍 Introduction to JavaScript
// -------------------------------------------------

// JavaScript ek scripting language hai.
// Computers sirf binary (0 aur 1) samajhte hain.
// Example: 
// Harsh → Translator (Interpreter/Compiler) → 01010010101
// JavaScript code ko browser understand nahi karta,
// pehle interpreter use karke usse machine-code mein convert kiya jata hai.

// 👨‍💻 JavaScript was created by Brendan Eich.
// Woh Netscape company mein kaam karte the.
// Sirf 10 days (approx 15-16 days) mein JavaScript banayi gayi thi,
// isliye shuruaat mein JavaScript bohot buggy thi.
// Baad mein multiple versions aaye, bugs fix hue.

// JavaScript ka ek major update aaya: ES6 (ECMAScript 2015)
// ES6 ne JavaScript ko completely modern bana diya.
// New features → let, const, arrow functions, classes, promises, etc.


// 📌 Why JavaScript is Important?
// -------------------------------------------------

// Website par interaction, animation, and user engagement ke liye JavaScript zaroori hai.
// Eg: Buttons click, sliders, popups, animations, forms validation, games, apps → JS ke bina possible nahi.


// JavaScript Can Do What?
// -------------------------------------------------

// ✅ Web Development (Frontend + Backend using Node.js)
// ✅ Mobile Apps (React Native)
// ✅ Desktop Apps (Electron.js)
// ✅ Games (Phaser.js)
// ✅ Robotics / IoT (Johnny-Five)
// ✅ AI & ML libraries (TensorFlow.js)


// 📍 Script Tag ka Use
// -------------------------------------------------

// HTML mein JS attach karne ke 2 tarike:

// 1. Inline Script
// <script>
//   console.log("Hello");
// </script>

// 2. External Script File
// <script src="script.js"></script>


// ❗ Variables (var, let, const)
// -------------------------------------------------

var a = 12;   // var: reassign + redeclare (avoid using)
let b = 12;   // let: reassign allowed, redeclare ❌
const c = 12; // const: reassign ❌, redeclare ❌


// 🖥 Console, Prompt & Alert
// -------------------------------------------------

console.log("Message");  // Normal output
console.warn("Warning!"); // Yellow warning
console.error("Error!"); // Red error message

prompt("Enter your name:"); // input box
alert("Hello!"); // popup message


// 🧵 Strings in JavaScript
// -------------------------------------------------

// Double quotes ("") or single quotes ('') ke andar jo bhi likha jaye → STRING

let str = "Harsh is learning JavaScript";


// ✂️ String Methods: slice, template strings, split, replace
// -------------------------------------------------

"Harsh bhai kaise ho".slice(4, 11);  // Output: "h bhai"

// slice(start, end)
// start included, end excluded

