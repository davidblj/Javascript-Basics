
function doExecute() { 

// 1. truthy and falsy values

    console.log(1 == '1');          // true : called as cohersion, both sides are converted as strings
    console.log(1 === '1');         // false
                            
// truthy values

    console.log(!!true);
    console.log(Boolean(true));     // you may use the double negation operator, or 'Boolean'
                                    // to get the truthy or falsy values of any expression 

    console.log(!!{});              // empty arrays and objects evaluate to truthy values
    console.log(!![]);
    console.log(!!new Date());
    console.log(!!'0');             // 0 inside a string evaluates to true, but false outside of it
    console.log(!!42);              // any number evaluates to true
    console.log(!!-42);
    console.log(!!3.14);
    console.log(!!-3.14);

    // falsy values
    console.log(!!false);
    console.log(!!null);
    console.log(!!undefined);
    console.log(!!0);
    console.log(!!NaN);
    console.log(!!'');


// 3. Ternary operator

    const number = 1;
    const result3 = 'The Number is: ' + (number === 1 ? 'One' : 'No Match');     // the '+' operator concatenates strings as well, aside
    console.log(result3);                                                        // from just summing numbers   


// 4. Switch statements

    const number4 = 1;
    let result4;

    switch (number4) {
        
        case 1: {                      // if we swap out this case for '1', we would get a no match result
            const text = 'One';        // case statements evaluate expressions with the '===' operator 
            result4 = text;
            break;
        }

        // you may define a 'case' with scope (with brackets, a block code), or without it
        // if you don't and you declare constants, then be aware that those variables will be
        // scoped to the switch block, and potentially trigger an exception

        case 99: {
            const text = 'Ninety-Nine';
            result4 = text;
            break;
        }
        case 1000:
            result4 = 'One Thousand';
            break;
        default:
            result4 = 'No Match';
    }

    console.log(result4);

}

module.exports = {
    doExecute
}