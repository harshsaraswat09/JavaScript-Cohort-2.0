## Pure Function 
//  pure function ek aisa function
// same input = same output
// Koi side effect nahi hoga

let a = 12;
function abcd(val){
    console.log(val+2);
}
abcd(12);
abcd(12);
abcd(12);
abcd(12);



## Impure Function
// same input = different output o sakta hai

let a = 12;
function abcd(val){
    console.log(Math.random() + val);
}
abcd(12);
abcd(12);
abcd(12);
abcd(12);

## - Understanding Scoping in JS - ['Global Scope' , 'Function Scope' ]

## - Understanding 'Closures' , 'Scoping Rule'

// Closure -> ek function jo return karta hai function but returning function jo hai vo parent function ka var use karega

function abcd(){
    let a = 12;
    return function(){
        console.log(a)
    }
}


--------------------------------

### ARRAY ###

## - What are Arrays in JavaScript and how to create an array.

// ek se zyada members rakhne ki jagah 

let arr = [1,2,3,4,5,6];
console.log(arr[5]);

#  how to create an array.

1. let arr = [1,2,3,4,5,6];
2. let arr2 = new Array()

## Understand How to Accessing Elements in Array
let arr = [1,2,3,4,5,6];
console.log(arr[2])

## - Functions on Arrays - ['Push' , 'Pop' , 'Shift' , 'Unshift' , 'indexOf' , 'Array destructuring' , 'filter' , 'some' , 'map' , 'reduce' , 'spread operator' , 'slice' , 'reverse' , 'sort' , 'join' , 'toString' ]

## - Iterating Over Arrays using - ['For Loop' , 'forEach']

let arr = [1,2,3,4]
for (let i = 0 ; i < 4 ; i++){
    console.log(arr[i])
}


let arr = [1,2,3,4];
arr.forEach(function(val){
    console.log(val)
})

--------------------------------

## OBJECTS ##

## - Understanding What are Objects in JavaScript - ['key-value pair']

let obj = {
    name: "harsh",
    age: 27,
    email: "harsh@male.com",
};

let obj2 = new Object()


## - Creating Objects, Accessing Properties, Deleting Property and nested objects

let obj = {
    name: "harsh",
    age: 27,
    email: "harsh@male.com",
};

obj.name
obj['name']

## Delete 
delete obj.name

## Nested Objects
let obj = {
    name: "harsh",
    socials: {
        instagram: "hahaha",
        facebook: "ahahah"
    }
};


