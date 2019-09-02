import '../assets/css/style.css';

function doExecute() {

    const app = document.getElementById('app');
    app.innerHTML = '<h1>JavaScript Basics</h1>';

// 1. hoisting

console.log(a)                 // variable a is hoisted and set as 'undefined', this wont actually cause an exception
var a = 'value'                        
console.log(a)


// 2. block scoping and let

/* 
    var: function scoped
    let: block scoped
*/

    {
        var a2 = 123
    }

    console.log(a2)             // 123: 'var' variables are function scoped      

// -------------------------

    {
        let b2 = 123
        console.log(b2)
    }

    // console.log(b2)          // exception: this variable is undefined as 'let' is blocked scoped

// -------------------------

    // console.log(c2)          // exception, ReferenceError: lets are not hoisted, unlike vars

    let c2 = 123
    console.log(c2)

// -------------------------

    const d2 = 234
    // d2 = 1                   // exception: you cant assign a number into a variable thats declared as a constant

    console.log(d2)

    const e2 = {
        name: 'david'
    }

    e2.name = 'jaramillo'

    console.log(e2)             // however you can reassign properties on object variables, (ecma 2015 syntax), do note
                                // that we are not reassigning this variable, we are merely changing it
}

module.exports = {
    doExecute
}