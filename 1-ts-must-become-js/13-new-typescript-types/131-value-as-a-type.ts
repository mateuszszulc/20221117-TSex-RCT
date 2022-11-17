/**
 *
 * Any value (e.g. simple type) in JS can be a type in TS.
 *
 * This way the shape of the data stays the same within that "value/type"
 **/


// Let's see inference on values:
let myString = 'Hello String'

// We can clearly see on hover that myString: string.
// All clear.

// However, if we do this:
const myOtherString = 'Great!'

// It will turn out that the inference will show:
// myOtherString: "Great!"

// This means that myOtherString can only have one value: "Great!"
// and looking at this `const` - it's true.

// So we get a type that denotes a specific value
// This is the same as writing:

let myNumber: 399;

// In this case, myNumber can only take the value 399!
// Error:
// myNumber = 112
// OK:
myNumber = 399

// This is a bit illogical, why do we need such a type, since the inference itself:
// const myNumber = 399
// would be perfectly fine and does the same job!

// The notation makes sense in conjunction with the so-called Union Type, which we'll talk about later
let myLuckyNumber: 7 | 5 | 3 = 3
// Error:
// myLuckyNumber = 1
// OK:
myLuckyNumber = 5
myLuckyNumber = 7
myLuckyNumber = 3

// In this case, instead of assigning something to the "wide" type :number - we only have a choice of 3 values!


// However, you can't (quite consciously) go a step further and make the type,
// from existing values in the code:

const myStringValue = 'value!'

// This won't work:
// let myValue: myStringValue = 'value!'

// However, because the inferred type is anyway: 'value!'
// There is a way to get the type from already "inferred" values
// we can do it with the typeof operator (but in the TS "type context")
let myValueBasedOnInferredTypeOfTheValue: typeof myStringValue;


export {};
