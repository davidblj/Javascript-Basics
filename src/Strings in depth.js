
// 1. String literal, Function and Constructor syntax

    console.log('Pizza "Hello!"');  // you may define double quotes inside single
    // quotes, but not double quotes inside double
    // quotes, or viceversa, you may can scape them                                    

    console.log('Pizza \'Hello!\'');

    // string concatenation
    const pizza = 'Pepperoni';
    console.log('Pizza is: ' + pizza + '!');    

    // string interpolation (es 2015) with multiline strings, you may not also call variables
    // but to invoke functions.

    // Multiline strings mirrors jump lines
    // Multiline strings are only available through backquotes
    console.log(`
    Pizza is: 
    ${pizza}!
    `);

    console.log(String(55 + 11), 55 + '11');    // 66, 5511 : concatenating a number with strings
                                                // results in a cohersion of the number into a string

    // You can use the String global function or the String and its constructor. yet, they are not
    // to be used in the real world. You can pass them arrays and objects                                             

    console.log(String({ name: 'Pepperoni' }));    // [object Object] 
    console.log(String([1, 2, 3, 4]));             // 1,2,3,4 

    console.log(new String(55));


// 2. Strings properties and indexes

    console.log(new String(5599));
    console.log('Pepperoni'.length);    // using the string literal or the string
                                        // constructor yields the same results as
                                        // they both contain the same properties

    console.log('Pepperoni'['length']); // this is the square brackets notation, you can access
                                        // all properties through out this notation, though, un-
                                        // practical. 

    const pizza2 = 'P e p p e r o n i';
    console.log(pizza2[0], pizza2[pizza2.length - 1], pizza2.length);   // P, i, 17 : (tip) in the first argument, you can
                                                                        // use an string


// 3. Strings and immutability

    const immutableString = 'I shall not change!';
    const uppercaseString = immutableString.toUpperCase();

    console.log(immutableString, uppercaseString);  // i shall not change, I SHALL NOT CHANGE :
                                                    // note that strings are inmmutable, toUpperCase
                                                    // wont change the string.


                                                    // 4. Correctly type checking Strings

    console.log(typeof 'Pepperoni');                                // string
    console.log('Pepperoni' instanceof String);                     // false
    console.log(new String('Pepperoni') instanceof String);         // true : refer to 'Numbers in depth section'
    console.log(String('Pepperoni') instanceof String);             // false
    console.log(Object.prototype.toString.call('Pepperoni'));       // [object String]                                                    


// 4. Exploring String methods

    console.log(String.prototype);                          // list of all of the string methods

    console.log('Pepperoni'.indexOf('P'));                  // 0    
    console.log('Pepperoni'.indexOf('Z'));                  // -1   
    console.log('Pepperoni'.includes('P'));                 // true : (es 2015)     

    console.log('Pepperoni'.replace('oni', 'fire'));        // Peppefire
    console.log('Pepperoni'.replace(/oni$/, 'fire'));       // Peppefire : with regular expressions    

    console.log('Pepperoni'.slice(2, -3));                  // pperon

    console.log('Pepperoni~Plain'.split('~')[1]);           // Pepperoni
    console.log('Pepperoni~Plain'.split(/~/)[1]);           // Pepperoni : with regular expressions

    console.log('  4444 5555 6666 7777  '.trim());                  // 4444 5555 6666 7777 : trim cuts out whitespaces 
                                                                    // on each side of the tail

    // if instead you would like to remove all whitespaces, you migth want to use 'replace'                                                                    
    console.log('  4444 5555 6666 7777  '.replace(/\s/g, ''));      // 4444555566667777
