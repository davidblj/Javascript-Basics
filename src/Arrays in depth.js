
// 1. Array literal, function and constructor syntax

    const drinks1 = ['Lemonade', 'Lime', 'Peach'];

    const drinksReference = drinks1;
    console.log(drinks1 === drinksReference);                // true

    console.log([] == [])                                   // false

    // you can instatiate arrays, but they are highly discourage.
    // these 2 expression are equivalent for array instantiation
    console.log(new Array('Lemonade', 'Lime', 'Peach'));
    console.log(Array('Lemonade', 'Lime', 'Peach'));


// 2. Properties, Indexes and Elements

    const drinks2 = ['Lemonade', 'Lime', 'Peach'];

    drinks2[0] = 'Diet Lemonade';
    // drinks['favourite'] = 'Cola';    // arrays behave pretty much like objects
                                        // and what we are doing here is that we
                                        // pushing a new item into the array, but its
                                        // new index instead of being a number, is going
                                        // to be 'favourite'

    // you can reset an array in 2 ways
    // note that 'drinks' is marked as 'const', but nevertheless,
    // you can still reset its values. 
    drinks2.length = 0;
    drinks2.splice(0, drinks2.length);

    console.log(drinks2);


// 3. Multi dimensional arrays

    // multi dimensional arrays are not supported natively by javascript, but
    // you can still create arrays inside arrays as an possible implementation. 
    const drinks3 = [['Lemonade', 99], ['Lime', 99], ['Peach', 89]];

    console.log(`Drink: ${drinks3[0][0]}, Price: ${drinks3[0][1]}`);


    // 4. Destructuring Arrays

    const drinks4 = [['Lemonade', 99], ['Lime', 99], ['Peach', 89]];

    // destructuring can be done element by element, specific values and
    // with the 'rest' syntax
    const [one, [, b], ...rest] = drinks4;   

    console.log(one, b, rest);                      // ['Lemonade', 99] 99 Array(2)


// 5. Adding Array elements

    const drinks5 = ['Lemonade', 'Lime', 'Peach'];

    // add items at the beginning of this array (mutable)
    // drinks.unshift('Water');                     // ['Water', Lemonade', 'Lime', 'Peach']

    // add items at the end of this array (mutable)
    // drinks.push('Water');                        // ['Water', Lemonade', 'Lime', 'Peach', 'water']

    // inmutable approach of pushing items at the beginning
    // of this array
    console.log(['Water', ...drinks5]);             // ['water', 'water', Lemonade', 'Lime', 'Peach', 'water']

    // mutable approach of adding elements at any position of an array
    const index5 = 1;
    console.log([
        ...drinks5.splice(0, index5),
        'Mojito',
        ...drinks5.splice(index5 - 1),
    ]);

    console.log([...drinks5, 'Beer']);              // ['Beer']
    console.log(drinks5);                           // []


// 6. Removing array elements

    const drinks6 = ['Lemonade', 'Lime', 'Peach'];
    const drinks6c2 = ['Lemonade', 'Lime', 'Peach'];

    // remove the first element in the array (mutable)
    let removed = drinks6.shift();          // ['Lime', 'Peach']

    // remove the last element in the array (mutable)
    removed = drinks6.pop();                // ['Lime']             

    console.log(removed);   

    // slice: inmutable approach to remove elements
    const index = drinks6c2.length - 1;
    const newDrinks = [...drinks6c2.slice(0, index)];

    console.log(newDrinks);         // ['Lemonade', 'Lime'] : The second argument is exclusive,
                                    // as index is equal to 2, 'newDrinks' is going to yield
                                    // the element at 0 and 1, but not at 2. 

    console.log(drinks6c2);         // ['Lemonade', 'Lime', 'Peach'] : the array is intact


// 7. Finding array elements (RAW MATERIAL)

    const drinks7 = ['Lemonade', 'Lime', 'Peach'];

    const index7 = drinks7.indexOf('Lime');      // 'indexOf' takes an string as a parameter, as well
                                                // as 'includes'
    console.log(index);
    if (index7 !== -1) {
        console.log(drinks7[index7]);
    }

    const included = drinks7.includes('Peach');
    console.log(included);              

    const drinksWithId = [
        { id: 1, name: 'Lemonade' },
        { id: 2, name: 'Lime' },
        { id: 3, name: 'Peach' },
    ];

    // if you have an array that is not made up of strings, you can't use 'indexOf' : 
    const idIndex = drinksWithId.findIndex(value => value.name === 'Peach');
    console.log(drinksWithId[idIndex]);

    const foundItem = drinksWithId.find(value => value.name === 'Peach');
    console.log(foundItem);


//  8. Shallow and deep array cloning

    const drinks8 = [['Lemonade', 99], ['Lime', 99]];
    const newDrinks8 = ['Peach', 89];

    // const merged = drinks8.concat(newDrinks);   // non mutable
    const merged = [newDrinks8, ...drinks8];         // non mutable operation with
                                                // the spread operator,  note that
                                                // we are not spreading the properties
                                                // of 'newDrinks' and hence we've got at
                                                // the end an array of 3 elements, and not 5

    console.log(merged);                           // [['Lemonade', 99], ['Lime', 99], ['Peach', 89]]
    console.log(drinks8);
    console.log(newDrinks8);


// 9. Reversing and Sorting Arrays 

    const drinks9 = [
        { name: 'Lemonade', price: 79 },
        { name: 'Peach', price: 99 },
        { name: 'Lime', price: 89 },
    ];

    console.log(drinks9.reverse());

    // how 'sort' works ? if the numeric result is lower than
    // 0, 'a' is going to be at an index lower than 'b', and viceversa
    // if the result is greater than 0, 'a' is going to be at an index
    // greater than 'b'
    console.log(drinks9.sort((a, b) => b.price - a.price));  // ascending
    // a.price - b.price                                    // descending


    // 10. Type checking arrays

    // you can safely typecheck an array with one of the following
    // approaches :

    console.log(typeof []);                                 // Object

    // an array, despite being an object, is an instance of
    // an array.
    console.log([] instanceof Array);                       // true
    console.log(new Array() instanceof Array);              // true
    console.log(Array.isArray([1, 2, 3, 4]));               // true : probably, the default way to go. 

    console.log(Object.prototype.toString.call([]));        // [Object Array]  : bulletproof approach  


// 11. Imperative array iteration (RAW)

    const drinks11 = ['Pepsi', 'Lemonade', 'Cola'];

    for (let i = 0; i < drinks11.length; i++) {

        const drink = drinks11[i];
        if (drink === 'Lemonade') {
            console.log('Pour me a glass!');
        }
    }    


// 12. Iteration with break and continue

    const drinks12 = ['Pepsi', 'Lemonade', 'Cola'];
    let count = 0;

    // the difference between break and continue
    // is that break, breaks the loop and
    // continue, continues the current operation    
    for (let i = 0; i < drinks12.length; i++) {
        const drink = drinks12[i];
        if (drink === 'Lemonade') {
            console.log('Pour me a glass!');
            continue;
            // break;
        }
        count++;        // 1 count is skipped as one
                        // 'continue' is hit
    }

    console.log(count);  // 2 (1 with 'break' enabled) and 3 withouth
                        // break and continue    


// 13. Iteration with for ..of (RAW)

    const drinks13 = ['Pepsi', 'Lemonade', 'Cola'];

    for (let i = 0; i < drinks13.length; i++) {
        const drink = drinks13[i];
        console.log(drink);
    }

    // for of
    for (const drink of drinks13) {
        console.log(drink);
    }

    console.log([1, 2, 3]);


// 14. Declarative Iteration with Array.forEach (RAW)

    const drinks14 = ['Pepsi', 'Lemonade', 'Cola'];

    drinks14.forEach((value, index, array) => {

        if (value === 'Cola') {
            console.log(value, index);
        }
        console.log(array[index]);
    });


// 17. Declarative Iteration with Array.reduce 

    const drinks15 = [
        { price: 220, name: 'Pepsi' },
        { price: 170, name: 'Lemonade' },
        { price: 200, name: 'Cola' },
    ];       

    // notes: the second argument of reduce its going to be
    // the starting value in the iteration
    const value = drinks15.reduce((prev, next) => prev + next.price, 0);

    console.log(value);
