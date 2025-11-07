// 1️⃣ Arithmetic Operators
// Used to perform math operations.

let a = 10, b = 3;

console.log(a + b); // 13  
console.log(a - b); // 7  
console.log(a * b); // 30  
console.log(a / b); // 3.33  
console.log(a % b); // 1 (remainder)  
console.log(a ** b); // 1000 (10³)


// 2️⃣ Assignment Operators
// Used to assign or update values of variables.

let x = 5;  
x += 3; // x = x + 3 → 8  
x -= 2; // 6  
x *= 2; // 12  
x /= 3; // 4  
x %= 3; // 1

// 3️⃣ Comparison Operators
// Used to compare values and return true/false.

console.log(5 == "5");  // true  (compares value only)
console.log(5 === "5"); // false (compares value + type)
console.log(5 != 3);    // true  
console.log(5 !== "5"); // true  
console.log(5 > 3);     // true  
console.log(5 <= 3);    // false


// 4️⃣ Logical Operators
// Used to combine conditions.

let age = 20;

console.log(age > 18 && age < 25); // true  (AND)
console.log(age > 25 || age > 18); // true  (OR)
console.log(!(age > 18)); // false (NOT)


// 5️⃣ Ternary Operator
// Short form of if-else.

let isLoggedIn = true;
let message = isLoggedIn ? "Welcome" : "Please Login";
console.log(message); // Welcome


// 6️⃣ Type Checking Operators
// ✅ typeof → checks the data type

console.log(typeof "Hello"); // string
console.log(typeof 10);      // number
console.log(typeof true);    // boolean

// 7️⃣ String Operator
// + is used to join (concatenate) strings.

let first = "JavaScript";
let second = "Rocks!";
console.log(first + " " + second); // JavaScript Rocks!


// 8️⃣ Spread & Rest Operator (...)
// ✅ Spread → expands elements

let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]


function sum(...nums) {
  console.log(nums);
}
sum(1, 2, 3, 4); // [1, 2, 3, 4]
