// console.log()
// console.warn()
// console.error()
// console.info()
// console.table()

// PROMPT - prompt aapse bas poochta hai

let nm = prompt("name ?");
console.log(nm);

// ALERT - alert aapkp bas batata hai  

alert("heyheyheyheyhey") 


// string methods - slice, template literals, split , replace, includes


1. slice()

Used to extract a part of a string.
Does not change the original string.

let str = "JavaScript";
let part = str.slice(0, 4);  // from index 0 to 3
console.log(part); // "JavaS"



2. Template Literals (` `)

Allows embedding variables or expressions inside a string using ${ }.
Also supports multi-line strings.

-------------------------------
let name = "Harsh";
let msg = `Hello ${name}, welcome to JavaScript!`;
console.log(msg);

// "Hello Harsh, welcome to JavaScript!"
-------------------------------


3. split()

Converts a string into an array, based on a separator.

4. replace()

Replaces part of a string with another value.
Returns a new string, original remains unchanged.

5. includes()

Checks if a string contains a specific word/character.
Returns true or false.

