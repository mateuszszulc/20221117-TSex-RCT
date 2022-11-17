/**
 * JavaScript has the so-called object literals.
 * They allow you to create a given object - without the need to define its structure
 * As in object-oriented languages that use classes.
 *
 * First a simple example....
 */

type NamedObject = { name?: string }

// When making a classic object in JS, all we need is the following:
const myObject: NamedObject = { };

// Now, we expect that you can dynamically extend the object with new fields and values
// property: value

console.log(myObject.name)

myObject.name?.toUpperCase();

// In classic JS, just add a new field and assign it a value
// However, it turns out that this is not possible in TypeScript:

// Uncomment to check:
myObject.name = 'toolbox';


myObject.name.toUpperCase();
/*

This is done through "type inference"

TypeScript has already determined the shape of the object based on the first assignment.
It didn't have any fields back then, so it can't be extended this way.
This is due to the fact that we did not specify that an object can have a `name` field and what type of value it will take

 */

// Let's see how to do this with a required field:
const namedObject: {name: string} = {name: 'Michael'};

// Or with a field that is optional:
let otherNamedObject: {name?: string};

otherNamedObject = {};
otherNamedObject.name = 'scissors';
