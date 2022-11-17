/**
 * Arrays are collections of elements of different types.
 * In JavaScript - they are always dynamic.
 *
 * Even specifying the size of the array using the constructor,
 * it can be changed later by adding elements
 *
 *
 * In an array, the elements are in a specific order and can be referenced by index.
 * The table is most often created using the following characters: [] - this is the so-called array literal
 * That's enough (we don't use a constructor).
 *
 * TypeScript allows us to specify exactly what types of elements will be stored in the array.
 * */

const myNumbers = [1, 2, 3, 40];

// The following won't work
// Basically, TypeScript has got us used to it - type inference!
// myNumbers.push('234');

// If we want to define ourselves what elements array stores:
const secretWords: string[] = [];

// Add elements to the array:
secretWords.push('lightning');
secretWords.push('thunder');
// here we are also "guarded":
// secretWords.push(1233);

// What if we want arrays with 2 (and more) types:
const twoKindsOfTypes: (string | number)[] = [];

twoKindsOfTypes.push(1123);
twoKindsOfTypes.push('23.2223');

// More about arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


/** Types for the array's: Higher Order Functions */

// iterate over the elements:
twoKindsOfTypes.forEach((value: string | number) => {
    console.log(value);
})

// filter out elements that meet the given condition:
const filtered = myNumbers.filter((value: number) => value > 10);

console.log(filtered);
// confirm that the `myNumbers` array has not changed after filtering:
console.log(myNumbers);

// element mapping:
// generic value <string> need not be specified explicitly (will be inferred)
// you can + Ctrl click in .map to see the type definition
const mappedArray = myNumbers.map<string>((value: number) => 'Hello ' + value);

console.log(mappedArray)

export {}
