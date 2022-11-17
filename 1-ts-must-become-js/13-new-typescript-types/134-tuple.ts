/**
 * Typescript allows you to create so-called tuple
 *
 * Basically, these are types that make sure to implement an array with a finite number of elements,
 * of a specific type. Most often we meet 2 elements variant
 *
 * https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
 **/

// Here is our tuple:
type Point = [number, number]

function calculate(from: Point) {
    console.log(from[0])
    console.log(from[1])
    // Error:
    // console.log(from[2])
}

const sample: Point = [20, 10]

// Using destructuring:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const [x, y] = sample;

console.log(x)
console.log(y)


const otherTuple: [number, string, boolean] = [0, 'isAdmin', true];
