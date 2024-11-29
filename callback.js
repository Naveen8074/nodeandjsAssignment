function greetUser(name, callback) {
    console.log(`Hello, ${name}!`);
    callback(name); 
}

function displayGoodbye(name) {
    console.log(`Goodbye, ${name}!`);
}

greetUser("Mars", displayGoodbye);
