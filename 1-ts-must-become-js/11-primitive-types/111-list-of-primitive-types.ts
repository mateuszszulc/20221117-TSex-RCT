/**
 * There are 7 primitive types in JS.
 * On their basis we build more complex objects, etc.
 *
 * Classic JavaScript behavior - allows dynamic type change.
 * Something that is initially assigned as a string may become a number after a while (**)
 *
 * In TypeScript - we want to get rid of this property and restrict it heavily.
 * By making sure that the initially set variable type remains the same.
 *
 * Simple types are passed by values ​​so that they can be compared using
 * triple equal sign === with another value of the same type.
 *
 *
 * Keywords introduced by TypeScript:
 * any, unknown, never, void
 *
 * Additional info:
 * (**) - It's not like there are no types in JS! - simply, typing is not done explicitly.
 * JavaScript itself recognizes the types, but we have no way to determine the exact shape of the data "in advance".
 * This issue is intended to be resolved by TypeScript.
 *
 * */

// List of all simple types in JS for 2022 (ES13):
// there is 7 of them
const word: string = 'Hello';
const num: number = 1275612.82;
const int: bigint = 10n;
const flag: boolean = false;
const sym: symbol = Symbol();
const noWay: undefined = undefined;
const noValue: null = null;

// Unlike JS, you can't change the type dynamically:
let mySample: string;
mySample = 'I am a string... always';
// Operation not allowed:
// mySample = 1234;

let myOtherSample = 'I am an inferred type of string';
// Operation not allowed:
// myOtherSample = 12355;

// Type Inference
// https://www.typescriptlang.org/docs/handbook/type-inference.html
// Inferred type is the so-called type calculated by TS based on
// what has been assigned to the constant / variable.

let inferredWord = 'Hello';
let inferredNumber = 1275612.82;
let inferredBigInt = 10n;
let inferredBoolean = false;
let inferredSymbol = Symbol();

// this can't be inferred due to TS assumptions:
// undefined to "subtype of all other types"
let inferredAny = undefined;
// null to "subtype of all other types"
let inferredNull = null;
// so this will work:
// inferredAny = 1;
// inferredNull = 1;

// [!!!] UNLESS:
// this behavior can be changed with the flag: "strictNullChecks": true in tsconfig.json
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined

// We check primitive types with the `typeof` operator
console.log(typeof 'hello');
console.log(typeof inferredWord);
console.log(typeof inferredNumber);
console.log(typeof inferredBigInt);
console.log(typeof inferredBoolean);
console.log(typeof inferredSymbol);
console.log(typeof inferredAny);

// Exception (due to a bug) - is `null` - which checking with `typeof` tells us nothing logical:
console.log(typeof inferredNull);
// compare with objects:
console.log(typeof new Date());
console.log(typeof {});
console.log(typeof []);

// Bonus knowledge:
// typeof will work and may also help us recognize the function:
console.log(typeof (() => {}));

// We want this file to be treated as a module by TS:
export {}
