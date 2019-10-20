
// 1. Object literal, Function and Constructor

    const drink1 = {
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: {
            sale: 99,
            full: 129,
        },
    };

    const drinkReference = drink1;
    drinkReference.name = 'Peach';                  // as we are dealing with a reference, we are
                                                    // changing the original object property

    console.log(drink1 === drinkReference);         // true : as the reference points to the
                                                    // same value

    console.log({} === {})                          // false : two objects are never the same
                                                    // unless they point to the same reference                                                      

    console.log({} instanceof Object);              // true : literals are also instances
    console.log(new Object() instanceof Object);    // true
    console.log(Object() instanceof Object);        // true : object on its own, in fact calls "new object", 
                                                    // unlike String or number


// 2. Properties, methods and values

    // an object key propertie may yield strings, functions, and numeric values
    // an object key that is neither an string, is eventually parsed
    // by javascript as an string (e.g id, name, price, 100)
    const drink2 = {
        
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: 99,
        
        getId: () => this.id,
        getNameDetails, 
        getDrinkDetails() {
            return `Drink ${this.name} (${this.price})`;
        },  

        'abc 123': 'I am the value!',
        100: 'I am a number!',
    };

    // when you bind this function into an object, 'this' keyword have
    // access to the object that is being binded to, but keep an eye to
    // arrow functions, because they behave quite differently  
    function getNameDetails() {
        return this.name;
    }

    const myId2 = 'id';

    console.log(drink2[myId2]);             // xhs8Pla
    console.log(drink2.name);               // Lemonade
    console.log(drink2['abc 123']);         // I am the value! : note that we cant access this value through the
                                            // dot notation; drink2.abc 123
    console.log(drink2[100]);               // I am a number!   

    console.log(drink2.getDrinkDetails());  // Drink Lemonade (99)
    console.log(drink2.getNameDetails());   // Lemonade

    console.log(drink2.getId());            // undefined : arrow functions can't access the scope
                                            // from its calle, and hence 'this' is undefined.
                                            // the arrow function have access to where it has been called
                                            // and not where it has been defined        


// 3. Shorthand properties and methods

    const id3 = 'xhs8Pla';
    const name3 = 'Lemonade';
    const price = 99;

    const someKey = 'name';

    // this type of shorthand comes with 'es 2015'
    const drink3 = {
        id3,                               // equivalent of id3 : 'xhs8Pla'                         
        [someKey]: name3,                  // this key property is set 'dynamically' 
                                        // by a variable  
        price,
        getDrinkDetails() {
            return `Drink ${this.someKey} (${this.price})`;
        },
    };

    console.log(drink3);


// 4. Desctructuring Object Properties

    const drink = {
        id4: 'xhs8Pla',
        name: 'Lemonade',
        price: {
            sale: 99,
            full: 129,
        },
    };

    // this is how you normally do to access an object properties
    const myDrinkId = drink.id;    
    const myDrinkSalePrice = drink.price.sale;
    // ... 
    console.log(myDrinkId, myDrinkSalePrice);

    const id4 = 1234;           // watch out for duplicate values
                                // you can't destructure the previous
                                // object without an alias for id 
                                // (e.g. 'myId')

    // You may access all properties through the destructuring syntax 
    const {
        id4: myId,                  // with an alias
        price: { full },            // destructuring of inner property 'full' 
        ...rest                     // 'rest' : an object containing the
                                    // the remaining values that where not destructure
    } = drink;

    const { sale, full: fullPrice } = drink.price;      // note that 'full' needs an alias which is called here as 'fullPrice'
    console.log(sale, fullPrice);                       // 99 129

    console.log(id4, myId, full, rest);   // 1234 xhs8Pla 129 Object { name: "Lemonade" }


// 5. Property and value existing checking

    const drink5 = {
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: {
        sale: 99,
        full: 129,
        },
        // hasOwnProperty() {                   // object override of 'hasOwnProperty'
        //   return false;
        // },
    };

    // existing property check approach    
    if (drink5.id) {
        console.log(drink5.id);
    }

    // value look up v1
    for (const prop in drink5) {                // for .. in provides the current property
        if (drink5[prop] === 'Lemonade') {      // for any javascript object
            console.log(drink5[prop]);
        }
    }

    // value look up v2 (preferred way)
    const hasLemonade = Object.values(drink5).includes('Lemonade');
    console.log(hasLemonade);

    // property look up v1
    console.log(Object.keys(drink5).includes('name'));

    // property look up v2 (preferred way)
    console.log(drink5.hasOwnProperty('name'));    
    console.log(Object.prototype.hasOwnProperty.call(drink5, 'name'));      // this is the safest way, as 'hasOwnProperty'
                                                                            // can be overrided by the object 

// 6. Adding and updating Object properties

    const drink6 = {
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: {
        sale: 99,
        full: 129,
        },
    };
        
    function propUpdate(prop, value) {
        drink6[prop] = value;
    }

    // we are going to update the 'name' property, which is straight forward
    // but what happens with say: 'brand' ? a new property its going to be set
    // meaning that the previous function is completly safe to use, as it own't
    // create an exception when a property don't exists
    propUpdate('brand', 'My Drinks Co.');
    propUpdate('name', 'Lime');    


// 7. Deleting properties

    const drink7 = {
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: {
        sale: 99,
        full: 129,
        },
    };

    // delete is a rather slow operation
    // delete drink.id;

    // a more performant way its to set the value to undefined 
    drink7.id = undefined;  
    if (drink7.id) {
        console.log('Has ID...');
    }

    console.log(drink7.hasOwnProperty('id'));   // true : beware, undefined is not going to
                                                // truly remove a property

    // there is a third way of removing properties, and is throught the destructuring technique
    const { price7, ...rest7 } = drink7;
    console.log(price7, rest7, drink7);         // the variable rest its not going to contain 
                                                // the property 'price', and hence, it has been
                                                // removed


// 8. Shallow and deep object cloning

    const drink8 = {
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: {
            sale: 99,
            full: 129,
        },
    };

    // There are 2 ways to make shallow copies, with object.assign or with the spread
    // operator

    const drinkClone = Object.assign({}, drink8);
    // const drinkClone = { ...drink };

    drinkClone.id = 'abcd';
    drinkClone.price.sale = 79;    

    console.log(drink8);    // {id: 'xhs8Pla', price: { sale : 79, ...}, ...} : they are called shallow copies 
                            // because they don't copy nested objects as shown with the 'sale' property

    // to make deep copy, that is, to copy nested objects, you need to use the JSON library: but there is
    // a catch, json.stringify its not going to copy functions, and the final object results with all
    // function properties trimmed in the final copy. 
    const drinkStringified = JSON.stringify(drink8);
    const drinkClone2 = JSON.parse(drinkStringified);

    console.log(drinkClone2)


// 9. Merging objects

    const drink9 = {
        id: 'xhs8Pla',
        name: 'Lemonade',
    };

    const price9 = {
        sale: 99,
        full: 129,
    };

    // you can merge objects with the spread operator (es 2015), or with the assign function
    const mergedDrink1 = Object.assign({}, drink9, { price9 });      // the third argument is quite important

    // as learnt in section 3, you can make shorthands with properties, and also with nested objects,
    // and here, by wrapping the object price with the Js object notation, we are essentially making a 
    // new object with a property called price resulting in this:

    /* 
    const drink9 = {
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: {                // so, you see, as assign is copying properties, and since
            sale: 99,           // our property is an object, we get a nested object in the
            full: 129,          // final merged object 
        }
    };
        
    */

    // spread operator notation 
    const mergedDrink2 = { ...drink9, ...{ price9 } };

    console.log(drink9, price9);
    console.log(mergedDrink1);
    console.log(mergedDrink2);


// 10. type checking objects

    const drink10 = {
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: {
            sale: 99,
            full: 129,
        },
    };

    // as seen in previous chapters, the most reliable way to 
    // type check objects is through the prototype method    
    function getType(obj) {
        return Object.prototype.toString
            .call(obj)
            .slice(8, -1)
            .toLowerCase();
    }

    // 'typeof' returns 'object' regardless of the 'true' type of the object
    console.log(typeof drink10);            // object
    console.log(typeof []);                 // object
    console.log(typeof null);               // object

    console.log({} instanceof Object);      // true
    console.log([] instanceof Object);      // true
    console.log(null instanceof Object);    // false : quite confusing result
        
    console.log(getType(drink10));          // object
    console.log(getType(null));             // null : null is finally distinguishable as a type
    console.log(getType([]));               // array    


//  11. Imperative object iteration 

    const drink11 = {
        name: 'Lemonade',
        price: {
            sale: 99,
            full: 129,
        },
    };

    // 'Object.create' creates a new object with the prototype of the
    // specified object, meaning that our new object is not going
    // to have the object properties directly, but it will have them
    // in its _proto_ object. 
    const drinkWithId = Object.create(drink11);
    drinkWithId.id = 'xhs8Pla';

    console.log('name' in drinkWithId);

    // Even though these properties are only avaiable in the _proto_ object
    // you can iterate through them all, wih a for ... in loop.
    // The 'in' operator checks all the properties in the prototype chain. 
    // side-note: object properties are not executed in order
    for (const prop in drinkWithId) {

    // to truly check which properties belongs to the object we are 
    // iterating, and not the properties in the prototype chain,
    // we can use 'hasOwnProperty'

        if (drinkWithId.hasOwnProperty(prop)) {
            console.log(prop, drinkWithId[prop]);     // id xhs8Pla (only printed through out the whole loop)
        }
    }

    // If you want to iterate properties which don't exist directly in
    // the object, you should always check the current loop property with
    // 'hasOwnProperty'


// 12. Declarative Object Iteration

    const drink12 = {
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: {
            sale: 99,
            full: 129,
        },
    };

    // unlike the 'in' operator, 'forEach' do not iterate over inherited
    // properties, and the check we previously made is now not
    // necessary. 
    Object.keys(drink12).forEach(prop => console.log(drink12[prop]));    

    // Object.entries return an array per property. 
    // each item its going to contain two elements: the property, and the value
    console.log(Object.entries(drink12));    


// 13. Shallow and deep cloning arrays 

    const drinks = [['Lemonade', 99], ['Lime', 99], ['Peach', 89]];

    // const drinksClone = [...drinks];                 // the spread operator makes a shallow copy
    // const drinksClone = drinks.slice();              // slice, as is, it's going to return the entire array
                                                        // and stills, it makes a shallow copy
    // const drinksClone = Array.from(drinks);          // the same goes to this function, taken out from es 2015

    // a deep clone, as we have done with objects, is achieved only with JSON.stringify
    const drinksClone = JSON.parse(JSON.stringify(drinks));

    drinksClone[0][1] = 1000;

    console.log(drinks);
