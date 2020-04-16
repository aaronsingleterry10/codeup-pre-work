"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

var name = "";

while (name === "") {
    name = prompt('What is your name?');
}

// TODO: Show an alert message that welcomes the user based on their input.

alert('Well hello, ' + name + '!');

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var answer = prompt('Do you like pizza?');

if (answer === "yes") {
    alert('Awesome!');
} else if (answer === "no") {
    alert('Well that is sad');
} else {
    alert('what?')
}
