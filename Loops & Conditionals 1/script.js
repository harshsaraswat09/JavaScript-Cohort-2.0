// 1. Print numbers from 1 to 10 loop from 1 to 10 and print each number

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Print only even  numbers from 1 to 20 Use a loop and condition to print only even ones

for (let i = 1; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}


// 3. Print numbers from 10 to 1  in reverse order with a decrement

for (let i = 10; i >= 1; i--){
    console.log(i);
}


// 4. Print the word "Yes" 5 times repeat using a loop

for (let i = 1; i <= 5; i++){
    console.log("Yes");
}


// 5. Print whether numbers from 1 to 10 are even or odd for each number even -> EVEN else -> ODD

for (let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i + " -> EVEN");
    } else {
        console.log(i + " -> ODD");
    }
}


// 6. Ask user for a number and say if its positive or negative use prompt() and a conditinals

let num = prompt("number batao");
num = Number(num);
if (num >= 0){
    console.log("Positive");
}else {
    console.log("Negative");
}

// prompt() returns a string so we need to convert it to a number


// 7. Ask user's age and check if eligible to vote
// if age >= 18 -> eligible
// else -> not eligible

let age = prompt("Enter your age");
age = Number(age);

if (age >= 18){
    console.log("Eligible to vote");
}else{
    console.log("Not eligible to vote");
}


// 8. Print multiplication table of 5 use a loop to print 5 x 1 to 5 x 10 

for (let i = 1; i <= 10; i++){
    console.log("5 x " + i + " = " + (5 * i));
}