// ✅ 1. Variables in JavaScript

// Variables are containers used to store data values.

// JavaScript provides three ways to declare variables:

// var, let, and const 
var a = 10;   // can be updated & redeclared (avoid using var)
let b = 20;   // can be updated but not redeclared
const c = 30; // cannot be updated or redeclared



// 🔒 2. Constants

// Declared using const

// Value cannot be changed once assigned

// Must be assigned at the time of declaration

const pi = 3.14;
pi = 3.15; // ❌ Error: Assignment to constant variable


let age = 22;           // Number
let name = "Harsh";     // String
let isStudent = true;   // Boolean
let x = null;           // Null
let y;                  // Undefined


// Non-Primitive (Reference) Data Types

// data type        | Description

// object             {name: "Harsh", age: 22}   // Collection of key-value pairs

// array               [10, 20, 30, 40]        // Ordered list of values

// funtion           function greet() { ... } // Reusable block of code