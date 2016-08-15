var greeting = "What is your name?"; 

function getUserName() {
    return prompt(greeting);
}

function yourFunction() {
     alert("Hello "+getUserName());
}

yourFunction();