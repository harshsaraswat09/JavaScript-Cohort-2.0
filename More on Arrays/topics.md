## this keyword

// this ek aisa keyword hai jo ki dynamic hai iski value badal jaati hai baar baar

console.log(this); // global object / window object

function abcd(){
    console.log(this); // global object / window object
}
abcd();

## Object -> function

let obj = {
    name: "Harsh",
    age: 22,
    fnc: function(){
        console.log(this); // obj
    },
}
obj.fnc();


## Normal vs arrow fnc

let obj = {
    name: "Harsh",
    age: 22,
    fnc: function(){
        console.log(this); // obj
    },
    fnc2: ()=>{
        console.log(this);
    }
}
obj.fnc();
obj.fnc2(); // window object or undefined in strict mode