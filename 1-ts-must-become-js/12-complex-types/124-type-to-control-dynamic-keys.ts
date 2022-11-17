/**
 * What if we want an object - which is dynamic?
 * What if it still works like in JS... but we'd like to get something out of this typechecking :)
 *
 * ... and this is what the creators of TS also thought about.
 * */

interface DynamicObject {
    [key: string]: string
}

const dynamicObject: DynamicObject = {
    sample: 'field'
}

dynamicObject.other = 'field'


// You can only use 3 types as object keys:
// symbol, string, number
interface AllKindsOfKeys {
    [key: symbol]: string,
    [key: number]: string,
    [key: string]: string,
}


interface ArrayLike {
    [key: number]: (string | number)[]
}

const arrayLikeObject: ArrayLike = {
    1: ['this', 'is', 'it'],
    2: [2, 3, 4, 1, '2'],
    3: [9, 1, 2, 33]
}

// A more flexible approach by combining [key] + generic type
interface ArrayLikeGeneric<T> {
    [key: number]: T
}

const stringMapper: ArrayLikeGeneric<string> = {};
const booleanMapper: ArrayLikeGeneric<boolean> = {};
const tupleMapper: ArrayLikeGeneric<[number, string]> = {
    0: [1, 'make'],
    1: [2, 'it-up'],
};

interface BooleanArrayLike extends ArrayLikeGeneric<boolean> {}

const booleanArrayLike: BooleanArrayLike = {
    0: true,
    1: false
}

export {}
