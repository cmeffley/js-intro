//console.log('Hello World');


//function sayHello() {
 // console.log('Hello!');
//}


//const sayHello = function() {
  //console.log('Hello!');
//}

// function sayHello = () => {
//   console.log('Hello!');
// }

// sayHello();

// *****Functions with Arguments*****

// function logsHello(name) {
//   console.log(`Hello, ${name}!`);
// }

// logsHello('Chris');
const sum = 55;

const addsTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log('inside function' + sum);
  return sum;
}

console.log(sum);
console.log(addsTwoNumbers(2, 1));
