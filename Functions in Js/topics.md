### - Understanding Function in JavaScript and why its widely used - [`parameters` , `arguments` , `rest parameters` , `hoisting` , `Variable hoisting` , `Function Hoisting`]

FUNCTIONS ->
## code ko reuse karna mein help karta hai
## func. aapke code ko tab chalata hai jab aap chaho


function abcd(age, name){
    // parameters
}

abcd(12, "harsh")
// arguments


function abcd(a,b,...c){
    // rest parameters
}

abcd(1,2,3,4,5,6);


HOISTING -> 
## hoisting hota hai kisi cheez ko bnne se pehle uska istemaal kar pana

--------------------------------

## Parameters in JavaScript - ['required' , ' destructured' , 'rest' , 'default']

# REQUIRED
function abcd(a,b,c,d){
    // agar aapne parameters banaye and aapne unme arguments nahi bheje to fir vo value parameter ki undefined ho jayegi
    console.log(a,b,c,d)
}

abcd()

# DESTRUCTURED
function abcd({name, age}){
    console.log(name, age)
    
}

abcd({name: "harsh", age: 27})


# REST
function abcd(...val){
    console.log(val)
}

abcd(1,2,3,4,5,6)

# DEFAULT
function abcd(a = 0 , b = 0 , c = 0){
    console.log(a,b,c)
}

abcd(1,2)

--------------------------------

## Arguments in JavaScript - ['Positional' , 'Default' , ' 'Spread']

## Positional Arguments
function abcd(a, b, c, d){
    console.log(a, b, c, d)
}

abcd(1,2,3,4)

## 'Classic Function', 'Nested Function' (Function within Function), 'Scope Chain' 

function abcd(){
    function defg(){
        console.log("chal jao")
    }
    defg()
}
abcd()

## Scope Chain

let a = 12 // Global
function abcd(){
    let b = 13
    function defg(){
        console.log(b)
    }

}
abcd()

--------------------------------

# Understanding Immediately Invoked function Expression (IIFE)

// turant chal gaya

(function (){

}) ();

// isko use krte hai private var banane k liye

--------------------------------

## - More Functions in JavaScript - ['Arrow Functions' , 'Fat Arrow' , 'Anonymous' , 'Higher Order' , 'Callback', 'First Class' , Pure Functions', 'Impure functions']

function abcd(){

}

# Fat Arrow
let fnc = () => {
    console.log("heyheyheyehey")
}

fnc()

## Anonymous - ek aisa fnc jiska koi naam na ho

function (){

}

## Higher order fnc

ek aisa fnc jo ki retunr krde ek aur function

ya toh

wo accept krle ek aur fnc parameter mein

function abcd(){
    return function(){

    }
}

function abcd(a){

}
abcd(function(){})

## Callback
function abcd(){

}
abcd(function(){})   //callback

## First Class
// first class fnc ek concept -> functions us lang. main variable ki tarah use ho sakte hai


