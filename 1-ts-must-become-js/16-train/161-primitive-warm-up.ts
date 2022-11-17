
// The comment above tells the typescript compiler not to parse this file...
/**
 * Task 1.6.1:
 *
 * The task has 2 stages:
 *
 * 1. AFTER code fixes for bugs that are visible at a glance.
 * 2. Remove from above: // @ts-nocheck and correct the code so that there are no errors reported by TS
 *
 * [AD 1.] Correct the records to lead to the correct display:
 *
 * 'You've reached the end! - BRAVO'
 * console...
 *
 * [AD 2.] and: get rid of all errors from the TS compiler
 *
 * // @ts-nocheck
 * // @ts-ignore
 * */

let myHello = 'Hello';
console.log(myHello, 'World')

myHello = 'Serious';
const help = "HelpMe out!"

const flag = true;
const LARGE_NUMBER = 2048

// here was supposed to be a comment that addNumbers must return a number!
function addNumbers(a: number, b: number): number {
    return a + b
}

let result = addNumbers(10, 20);

console.log('Result is:', result);

// console.log(helloStranger())

const helloStranger = (): string => 'Hello Stranger !';

console.log(randomNumber())

function randomNumber(): number {
    return Math.random() * 100;
}

console.log('You reached the end! - BRAVO')

export { };
