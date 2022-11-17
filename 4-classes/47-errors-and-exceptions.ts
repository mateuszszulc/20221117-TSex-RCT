/**
 * JS allows us to "throw exceptions" - for this we use the `throw` keyword
 * after throwing an exception - the code under it is not available (unreachable code)
 * JavaScript also has a native Error class constructor.
 *
 * Exceptions can be "caught" in the try {} catch () {} block - higher in the code, e.g. after calling the function
 *
 * In JavaScript as "error" we can throw (throw) whatever we want.
 * TypeScript does not negate this behavior, however it is not a good practice.
 *
 * It is worth using the Error object or extend it for your purposes
 * */


function isLowerThan10(num: number | undefined): boolean {

    if(typeof num !== 'number') {
        throw new Error(`The given value: ${num} is not numeric!`)
    }
    return num < 10;
}

isLowerThan10(20); //?
isLowerThan10(1); //?

try {
    let x: any = '10';
    isLowerThan10(x);
} catch (e) {
    console.log(e);
}

// Function that always throw an error:
function iWillAlwaysThrow(): never {
    throw new Error('Always... error...')
}

// Proof that you can throw any type of value as an error,
// [!] However, in practice - this is not a good idea
function canThrowAnything(): never  {
    throw 123;
}

// A better approach:
class MyOwnError extends Error {
    constructor(message: string, public readonly myErrorCode = 0) {
        super(message);
    }
}

function throwSomethingPredictable(): never {
    throw new MyOwnError('Disaster has begun', 2200);
}

try {
    throwSomethingPredictable();
} catch (e: unknown) {
    // Write e: unknown or e: any - is necessary.
    // Unfortunately, being able to throw anything through Runtime in which there is no TS anymore - makes TypeScript unable to help us
    // However, we can narrow down the error type by using the instanceof operator:
    // This gives us confidence
    if(e instanceof MyOwnError) {
        console.log('I handle specific error', e.myErrorCode,  e.message)
    } else if (e instanceof Error) {
        console.log('I handle general error', e.message)
    } else {
        console.log('I can not handle this - ', e);
    }

    // More on (e: unknown) / (e: any)
    // https://github.com/microsoft/TypeScript/issues/8677#issuecomment-220385124
}

export {}
