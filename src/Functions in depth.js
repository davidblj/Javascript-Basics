
// 1. Function declarations and expressions

    // hoisting ; function expressions are not scoped
    console.log(makeCar1);                       // function
    console.log(makeCarExpression);             // undefined
    console.log(makeCarArrow);                  // undefined
    console.log(makeCarArrowShorthand);         // undefined

    // Function Declaration Syntax, functions are callable objects
    function makeCar1() {
        console.log('Making car...');
    }
    makeCar1();

    // Function Expression (anonymous or named function)
    let makeCarExpression = function myFunction() {};
    makeCarExpression = function () {};        // you might create functions withouth names 
    console.log(makeCarExpression.name);       // myFunction/makeCarExpression

    // Arrow Function 
    const makeCarArrow = () => {
        console.log('Making car inside Arrow...');
    };
    makeCarArrow();

    // shorthands
    const makeCarArrowShorthand = () => console.log('Short');   // implicit return
    makeCarArrowShorthand();


// 2. Function parameters and defaults

    // default parameter
    function makeCar(name = 'Porsche') {    
        
        // name = name || 'Porsche';    // x or Porsche (if null). fallback #1
    
        // if (!name) {                 // fallback #2
        //   name = 'Porsche';
        // }

        console.log(`Making car: ${name.toUpperCase()}`);
    }
    
    // strings = arguments
    makeCar('Ferrari');                 // Ferrari
    makeCar();                          // Porsche


// 3. Rest parameters and arguments

    function makeCarPrice() {
        
        console.log(arguments, Array.isArray(arguments));       // false: this is not array, and yet is an object,
                                                                // an existing object.

        // arguments are not iterable, but you can do so by making an array from it. 
        const total = Array.from(arguments).reduce((prev, next) => {
            return prev + next;
        });
        console.log(`Total: ${total}USD`);                      // Total: 275USD
    }
    
    makeCarPrice(11, 44, 55, 99, 66);           // even though there are no parameters
                                                // this is passed down as an 'array like object'
    
    // in es 2015, you can now access directly that variable as an array
    // This variable must be at the end of the parameters of the function
    function makeCarPriceRest(...params) {
        
        console.log(Array.isArray(params));                    // true     
        const total = params.reduce((prev, next) => prev + next);
        console.log(`Total: ${total}USD`);
    }
    
    makeCarPriceRest(99, 88, 77, 11, 44);


// 5.  Function closures and scope

    // its important to know that javascript looks for all variables scope by scope, starting
    // in the inner most scope block to the outer most scope block. Variables can be override in this
    // manner
    function makeCarPartID(id) {

        // scope 1                                      // Shockingly, 'name' is not accesible
        const theId = `CAR_PART_${id}`;                 // to scope #1
        
        // closure (note: arrow functions are valid as well)
        return function(name) {
            
            // scope 2
            return `${theId}_${name.toUpperCase()}`;    // theId located at scope #1
                                                        // is accesible in scope #2
        };
    }
    
    const carPartId5 = makeCarPartID('x8YdsZ12');        // function : a function is returned
    console.log(carPartId5('Left Door'));                // CAR_PART_x8YdsZ12_Left Door : The function is able to access to
                                                        // its outer scopes where it has been defined

    console.log(carPartId5('Right Door'));               // CAR_PART_x8YdsZ12_Right Doort

    
    // What happens when the scope #2 is not defined inside that scope #1, but instead as an arrow function
    // that comes from a distinct scope of scope #1 ? Js compiler just won't let you define a function with 
    // undefined variables

    /* 
    // function outside scope #1
    let independantArrowFunction = (name) => {       
        return `${theId}_${name.toUpperCase()}`;        // Compilation error, 'theId' is not defined.
    } */                                                // as is not on this scope or an outer scope    


// 6. Inmediatly invoked function expressions (IIFE)

    const carPartId6 = (function(id) {
        const theId = `CAR_PART_${id}`;
        return function(name) {
            return `${theId}_${name}`;
        };
    })('x7H8sFf');                                      // function : inmediate invokation (id), note that our function is wrapped
                                                        // in paranthesis. 
    
    console.log(carPartId6('Left Door'));                // CAR_PART_x8YdsZ12_Left Door


// 7. Functions and callbacks

    function carPartId7(name, fn) {                     // The second parameter is a callback
        const theId = `CAR_PART_x8zOsl`;
        return fn(`${theId}_${name}`);                  // callback invocation
    }
    
    const carPart = carPartId7('Left Door', function(id) {
        return `Car Part ID: ${id}`;
    });
    
    console.log(carPart);


// 8. Functions and 'this'

    const firstCar = { id: 'x8KszK0' };
    const secondCar = { id: 'bc90slqa' };
    const thirdCar = { id: 'h9sNsa' };

    function carPartId(name, quantity) {
        console.log(`${this.id}_${name}_${quantity}`);
    }
    
    const boundThirdCar = carPartId.bind(thirdCar);         // bind provides a context. 
                                                            // meaning that 'this' keyword is going
                                                            // to get replaced by the object 'thirdCar'
                                                                
    boundThirdCar('Windscreen', 99);                        // h9sNsa_Windscreen_99
    boundThirdCar('Exhaust', 9);                            // h9sNsa_Exhaust_9    

    // call and apply suffice the same purpose, but they differ
    // in the amount of arguments; apply receives the function 
    // arguments as an array, and call, as a consecutive 
    // list of parameters 

    // now, 'call' and 'apply' binds the object and calls the 
    // function inmediatly, but 'bind', just binds the object but it wont
    // call the function, which it makes it more reusable. 

    // call = c = commas
    carPartId.call(firstCar, 'Left Door', 12);              // x8KszK0_Left Door_12                              

    // apply = a = array
    carPartId.apply(secondCar, ['Right Door', 21]);         // bc90slqa_Right Door_21
 