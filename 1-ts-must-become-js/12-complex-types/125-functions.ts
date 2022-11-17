/**
 * Functions are one of the basic elements without which it is impossible to talk about building a JS application.
 *
 * Functions can be passed in JS as values because there is a paradigm in JavaScript:
 * Function First Class Citizen
 *
 * so... TypeScript also offers type notation for functions
 */

type MySampleSumMethod = (a: number, b: number) => number

interface MySampleObject {
    name: string;
    sum: MySampleSumMethod;
}

// Implementation
const mathObject: MySampleObject = {
    name: 'Sum 2 numbers',
    sum(a: number, b: number): number {
        return a + b;
    }
}

// In JavaScript, we distinguish 2 key functions:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
// DECLARATION:
function functionDeclaration(name: string): string {
    return `Hello ${name}`
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
// FUNCTION EXPRESSION:
const functionExpression = function(name: string): string {
    return `Hello ${name}`
};

// These 2 notations implement the same logic 1:1, but the difference is that the declaration has a name.
// A function expression is an anonymous function that we reference: functionExpression
// The declaration can be invoked before writing it, the function expression will use const or let,
// so it cannot be called before its assignment.

// In addition, you need to look at the function expression from a broader perspective.
// It can be written in the modern form of the so-called arrow functions:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// FUNCTION EXPRESSION:
const arrowFunctionExpression = (name: string): string => `Hello ${name}`


// In JavaScript, functions and function expressions can be passed as values,
// and this is the basis for asynchronous JS operation, in the context of calling the so-called callbacks.
// For example:
setTimeout(() => {

    console.log('I\'m done after 3 seconds')

}, 3000)

// To call the setTimeout function, we passed a -> function expression as an argument.

// Using a type also becomes important when using function expressions:
const sampleUseOfTheType: MySampleSumMethod = (a: number, b: number): number => a + b

// Let's also consider this case:
function addOne(value: number, sumNumbersCallback: MySampleSumMethod): number {
    return sumNumbersCallback(value, 1)
}

addOne(22, sampleUseOfTheType) //?
addOne(450, sampleUseOfTheType) //?
addOne(1234, sampleUseOfTheType) //?

export {}
