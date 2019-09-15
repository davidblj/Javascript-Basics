
// 1. Number literal, Function and Constructor syntax

// literal: syntax for numbers creation
const literalNumber = 99;
console.log(literalNumber);

// function syntax: creating numbers without constructors
// This is how your perform a type-conversion in a non-constructor context
console.log(Number(55));
console.log(Number('33'));
console.log(Number('44px'));                    // NaN

// constructor syntax that creates a wrapper Object
// you should avoid it
console.log(new Number('44px'));


// 2. Integers and floating points

// beware of floating point operations, as they may return unexpected values

console.log(0.1 + 0.2);                         // 0.30000000000 ...
console.log(0.1 + 0.2 === 0.3);                 // false

const price = 9.33;
const quantity = 3;
console.log(price * quantity);                  // 27.990000000 ...

// how do you trim that unwanted decimal precition in JS that we saw in the previous example ?
// this is one way: 
const anotherPrice = 9.33 * 100;
const anotherQuantity = 3;
console.log((anotherPrice * anotherQuantity) / 100);


// 3. Numbers in depth

console.log(parseInt('55px', 10));              // 55
console.log(parseFloat('55.9999px') * 10);      // 559.999

console.log(Number('55e10'));                   // 550000000000 : cientific representation
console.log(Number('55.9999px'));               // NaN : unlike parseInt or parseFloat, Number wont take invalid characters with floating numbers
console.log(Number('55.9999'));                 // 55.9999 
console.log(9 + +'99.5555');                    // 108.5555 : adding the operator '+' on any string yields a number convertion


// 4. Understanding not a number 

// NaN is a reserved word in Js, an object, to say so. 

const result = Number('55px');

// isNaN, this global function is not to be used as is confusing
console.log(isNaN(result));                     // true
console.log(isNaN('I am a String!'));           // true : even though an string is not a "NaN", this function still returns true

console.log(Number.NaN);                                // NaN
console.log(Number.isNaN(result));                      // true
console.log(Number.isNaN('I am another String!'));      // false, "es 2015" do check for "NaN"
console.log(Number.isNaN(Number.NaN));                  // true

console.log(Number.isInteger(66));                      // true                    
console.log(Number.isInteger('99'));                    // false



// 5. Numbers type checking

console.log(typeof 99.66);                  // 'number'
console.log(typeof 99.66 === 'number');     // true

console.log(99 instanceof Number);          // false : 99 is a literal value and not an instance of Number
// console.log(99 instanceof number);       // compile error : the type 'number' don't exist 

console.log(Number('99') instanceof Number);            // false
console.log(new Number('99') instanceof Number);        // true

// "instanceOf" is not a reliable way to type check numbers in js, an alternative is to convert 
// any object into an String, and then to check its value

console.log({}.toString)                    // [object Object]: this is probably the safest way to type check in js 

console.log(Object.prototype.toString.call(99))                             // [object Number]
console.log(Object.prototype.toString.call(99).slice(8, -1) === 'Number');  // true :
                                                                            
                                                                                // you should access its string value
                                                                                // through the object.prototype call.

                                                                                // the slice portion of this sentence
                                                                                // retrieves the string "Number", its type
// 6. Exploring number objects


// 'toFixed' trims the floating numbers

// console.log(99.toFixed(4));                              // compile error 
console.log(99..toFixed(4));                                // '99.0000' : a workaround, the dot refers to its decimal portion
console.log((99).toFixed(4));                               // '99.0000' : cleaner workaround
console.log(parseFloat((99.12345678).toFixed(4)));          // 99.1234


// 'toPrecision' limits the amount of numbers

console.log((99.12345678).toPrecision(5));                  // 99.123    

// and lastly, 'valueOf', which returns the primitive value of any object 

console.log(new Number(99).valueOf());                      // 99 

