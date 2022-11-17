/**
 * Generics in TypeScript work in much the same way as in other languages typed with OOP.
 * If you know, for example, generic types in Java / C# - understanding the following entries - will not be a problem.
 *
 * Generics allow us to extend the reusability of our code.
 *
 * It is often the case that, for example, a data type or class invented by us - they store other data.
 * However, this data can be of any type.
 * At the stage of designing methods in the class or parameters sent to our function - we are not
 * able to determine what type of data we will handle.
 * At the same time - type :any or :unknown are not a solution for us, because by creating a new one
 * class instances - we want to have syntax hints related to the type that we finally used when constructing it.
 *
 * Here comes the rescue: generics, which allow such flexibility.
 *
 * Let's see some examples....
 * */

// The most obvious generics are arrays
// At the time of defining it, we "add" what it will actually store:

let undefinedArray: Array<string>;
const mySampleArray: Array<string | number> = [];

mySampleArray.push(1120);
mySampleArray.push('23');
// error (Array contains either string or number):
// mySampleArray.push(true);

// This may not be obvious, because the most common and convenient way to write an array type is:
let undefinedArray2: string[];
const myOtherArray: (string | number)[] = [];

// This is important from JSX point of view. Where we also use notations, e.g. <div>
// TS introduced (only for arrays) a special notation, like: type[]:

interface User {
    name: string
}

const userCollection: User[] = [ { name: 'Mike'}, { name: 'Ana'}, {name: 'John'}, {name: 'Bianca'} ]

export {}
