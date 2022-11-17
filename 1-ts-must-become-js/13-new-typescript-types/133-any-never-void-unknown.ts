/**
 * Typescript allows you to use a type called :any
 *
 * It allows us to get backward compatibility and functionality straight from JavaScript:
 * That is, our variables are still "dynamically typed"
 *
 *
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any
 * https://www.typescriptlang.org/docs/handbook/2/functions.html#never
 * https://www.typescriptlang.org/docs/handbook/2/functions.html#void
 * https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown
 *
**/

let whyIWannaDoThat: any = 12323;
whyIWannaDoThat = 'Hello';

// [!] Assign any to string - possible.
// (note that this is dangerous - e.g. commenting out line 16 does not cause TS to show an error)
const myString: string = whyIWannaDoThat;
console.log(myString);
// The code above do not generate errors. Because we SPECIALLY told TypeScript to behave this way.

// Why would we want to get rid all of this goodness from TS and keep using that :any notation anyway?!
// It turns out to be useful in at least 3 cases:
// 1) If you are migrating a project from JavaScript to TypeScript
// 2) If you are not sure about the type or can't get it because you are integrating a JS library into a project with TS
// 3) If you're prototyping something quickly in code and want to add type details later

// Very similar behavior is introduced some time ago (TS 3.0) type: `unknown`;
let iReallyDoNotKnow: unknown = '12321';
iReallyDoNotKnow = 123123;
iReallyDoNotKnow = false;
iReallyDoNotKnow = 23;

// [!] Assigning unknown to number - will not be possible.
// MAJOR DIFFERENCE between any and unknown:
// (uncomment) The following line generates an error:
// const myNumber: number = iReallyDoNotKnow;

// That's why unknown is called "type-safe" - we need to make sure exactly what type `unknown` is
// Only then will TS allow us to assign it to e.g. number:

if(typeof iReallyDoNotKnow === 'number') {
    // Now TS doesn't treat it as an error:
    const myNumber: number = iReallyDoNotKnow;
}

// `void` and `never` are used more for functions or methods, as follows:
function mySpecialProcedureThatReturnsNothing(): void {

}
// This way we have a function that returns nothing.
// Could we use the word `undefined`? - knowing that in JS a function that returns nothing - will return undefined ?
console.log(mySpecialProcedureThatReturnsNothing());
// No, because TypeScript expects a `return` keyword in the body of the function then.

// A function that returns nothing - because there is an exception thrown in its body, it will actually give us `never`:
function mySpecialThrow(): never {
    throw new Error('Ooooops !');
}

export {}
