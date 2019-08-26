
// 1. Number literal, Function and Constructor syntax

// literal: syntax for numbers creation
const literalNumber = 99;
console.log(literalNumber);

// function syntax: creating numbers without constructors
// this go by as : performing a type-conversion in a non-constructor context
console.log(Number(55));
console.log(Number('33'));
console.log(Number('44px'));                    // NaN

// constructor syntax (arround the function) that creates a wrapper Object
// avoid using it
console.log(new Number('44px'));


// 2. Integers and floating points

// beware of floating point operations, as they may return unexpected values

console.log(0.1 + 0.2);                         // 0.30000000000 ...
console.log(0.1 + 0.2 === 0.3);                 // false

const price = 9.33;
const quantity = 3;
console.log(price * quantity);                  // 27.99000000 ...

// how do you trim that unwanted decimal precition in JS that we saw in the previous example ?
// this is one way to do that   
const anotherPrice = 9.33 * 100;
const anotherQuantity = 3;
console.log((anotherPrice * anotherQuantity) / 100);


// 3. Numbers in depth

console.log(parseInt('55px', 10));              // 55
console.log(parseFloat('55.9999px') * 10);      // 559.999

console.log(Number('55e10'));                   // 550000000000 : cientific representation
console.log(Number('55.9999px'));               // NaN : unlike parseInt or parseFloat, Number wont take invalid characters
console.log(Number('55.9999'));                 // 55.9999 
console.log(9 + +'99.5555');                    // 108.5555 : adding the operator '+' on any string yields a number convertion


// 4. Understanding not a number 

// NaN is a reserved word in Js, an object. 

const result = Number('55px');

// isNaN, this global function is not to be used as is confusing
console.log(isNaN(result));                     // true
console.log(isNaN('I am a String!'));           // true : even though an string is not a "NaN", this function still returns true

console.log(Number.NaN);                                // NaN
console.log(Number.isNaN(result));                      // true
console.log(Number.isNaN('I am another String!'));      // false, es 2015 do check for "NaN"
console.log(Number.isNaN(Number.NaN));                  // true

console.log(Number.isInteger(66));                      // true                    
console.log(Number.isInteger('99'));                    // false
