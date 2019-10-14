
// 1. Boolean literal, Function and Constructor Syntax (Truthy and falsy values)

    console.log(true, false);       // literal values

    const arg = 'X';
    console.log(Boolean(arg));      // true : truthy and falsy evaluation of elements in js
    console.log(!!arg);             // true : javascript boolean cohersion (equivalent of the
                                    // previous expresion)
    console.log(Boolean([]));       // true
    console.log(Boolean({}));       // true

    console.log(new Boolean(arg));  // Boolean object containing 'True'

    
// 2. Correctly type checking Booleans

    console.log(typeof false);                              // boolean    
    console.log(true instanceof Boolean);                   // false
    console.log(new Boolean('X') instanceof Boolean);       // true
    console.log(Object.prototype.toString.call(true));      // [Object Boolean]
