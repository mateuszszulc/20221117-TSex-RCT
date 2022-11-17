/**
 *
 * Unfortunately, the TypeScript notation:
 *
 *  x as Type
 *
 * It has nothing to do with casting. We already know that it can't, because TS is not in runtime
 * It's just a "Type Assertion" - and that's a significant difference.
 *
 * Let's see on examples
 * */

interface Payment {
    value: number;
    currency: 'PLN' | 'USD' | 'EUR';
    method: 'by-cash' | 'card' | 'pay-service';
}



let payMeNow: Payment;

// This will of course generate an error:
// payMeNow = {}

// but if we write it like this:
let payMeNowFake = {} as Payment

// This is when we "trick" TS that it is an object that meets the requirements of the Payment interface, see:
payMeNowFake.method.toUpperCase() // this will generate a Runtime Error!

// payMeNowFake is still an empty object, but we told TS: "trust me - I know what I'm doing".
// "This is Payment, don't worry :)!"

// In this case, it's a type assertion, not a type casting!
// Type-casting, real and runtime in JS, can only be achieved for primitive types,
// Each Type can be cast to a primitive: number, boolean or string using the object classes for these types
// (concept also taken from Java, there primitive types also have object constructors)

// Examples:

// Runtime type cast to number:
console.log(Number({}))
console.log(Number('203'))
console.log(Number(true))
console.log(Number(false))

//  Runtime type cast to boolean:
console.log(Boolean({}))
console.log(Boolean(NaN)) // because it's falsy
console.log(Boolean('')) // falsy
console.log(Boolean(' '))

export {}
