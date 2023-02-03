// The name of JavaScript

// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”

if(‘What is the “official” name of JavaScript?’ === ECMAScript){
  console.log('right!')
}else if {
  console.log('“You don’t know? ECMAScript!”')
}

// CORRECT ANSWER
// let value = prompt('What is the "official" name of JavaScript?', '');

//     if (value == 'ECMAScript') {
//       alert('Right!');
//     } else {
//       alert("You don't know? ECMAScript!");
//     }


// Show the sign
// Using if..else, write the code which gets a number via prompt and then shows in alert:

// 1, if the value is greater than zero,
// -1, if less than zero,
// 0, if equals zero.
// In this task we assume that the input is always a number.

if(value > 0) {
  alert(1)
} else if( value < -1) {
  alert(-1)
} else {
  alert(0)
}

// Rewrite 'if' into '?'

// Rewrite this if using the conditional operator '?':

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

let result = (a + b < 4) ? alert('Below') : alert('Over') 


// Rewrite 'if..else' into '?'
// importance: 5
// Rewrite if..else using multiple ternary operators '?'.

// For readability, it’s recommended to split the code into multiple lines.

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }


let message = (login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login':
'';