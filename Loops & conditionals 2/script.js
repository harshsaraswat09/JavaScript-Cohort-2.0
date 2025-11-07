// 11. Allow only 3 attempts to enter correct password If user gets it right early, stop. If not → “Account locked”

let attempts = 0;
let pass = "secret";

let password = prompt("Enter your password:");
while (password !== pass){
    if (attempts === 3){
        console.error("Account locked");
        break;
    }
    password = prompt("Incorrect password. Try again:");
    attempts++;
}

