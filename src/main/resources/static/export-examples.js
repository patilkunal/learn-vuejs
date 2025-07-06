export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}

//to use these functions in another file, you can import them like this:
//import { add, subtract } from './export-examples.js';

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

export { multiply, divide };
//to use these functions in another file, you can import them like this:
//import { multiply, divide } from './export-examples.js';


// You can also export functions as default
// export default function(a, b) {
//   return a + b;
// }

// To use the default export, you can import it like this:
// import add from './export-examples.js';  