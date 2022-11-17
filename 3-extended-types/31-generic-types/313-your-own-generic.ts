// The beauty of generics is that you can create your own.
// We can, for example - create a function that doesn't yet know exactly what type it will log on the console
function logItOut<ITER> (something: ITER) {
    console.log(something);
}

// We can use this in a simple way with type inference:
logItOut('Hello !');
// Or specifying the exact type:
logItOut<string>('Hello !');
logItOut<number>(12012);

// This notation doesn't have much logic or validity - making it look like we could just use `any`!

// However, note (uncomment) that this will generate an error
// logItOut<string>(123123);

// This is where we start to see the advantage of generics over any / unknown

// Values equal to any or unknown - can be anything.
// However, when using a generic type, we can narrow down the type we want.


// Generics aren't just for classes, they can be applied to functions and type definitions (e.g. interfaces)

// Let's see a function that "wraps" 2 data into an array:
// [!] The notation 'T' is arbitrary, we can name the generic type parameter whatever we want - it's our decision.
function wrapInArray<T>(first: T, second: T): T[] {
    return [first, second];
}

// NOTE: Typescript knows that wrapInArray is generic because its notation is: wrapInArray<>
// it is these angle brackets with any text inside <STH> that define that STH will then be typed.

// If we use type inference, TypeScript will know exactly what type the array is
const myStrings = wrapInArray('a', 'b');
// notice TS knows it's an array of strings:
myStrings.push('Hello');
// we can't e.g. do this:
// myStrings.push(12123);

// Since our Generic Type is defined the same for both function parameters,
// we can't call this function with 2 different types of arguments!
// operation not possible:
// wrapInArray(123, true);

// Of course, we can also write this explicitly (without relying on inference)
const myFlags: boolean[] = wrapInArray<boolean>(true, false);
console.log(myFlags);


// The last example with a function is a theme where we can return an array with 2 different types,
// That is - what if we want to have different types of data in our returned Array?
// For example, Array<string | number>??

function wrapInArrayDifferent<T1, T2>(first: T1, second: T2): (T1|T2)[] {
    return [first, second];
}

// explicitly:
const numbersOrStrings1: (number | string)[] = wrapInArrayDifferent<number, string>(3, 'words');
// implicit (inferred):
const numbersOrStrings = wrapInArrayDifferent(3, 'words');
console.log(numbersOrStrings);

numbersOrStrings.push(123);
numbersOrStrings.push('123');
// TS continues to guard our type:
// numbersOrStrings.push(true);


// GENERIC TYPES in classes:
// It is possible to use generics in classes
// For example, we don't know what type of elements we will provide in the class constructor:

// simple implementation:
class AnythingToString<ANYTHING> {
    constructor(private value: ANYTHING) {}

    toString(): string {
        return String(this.value);
    }

    showType(): string {
        return typeof this.value;
    }

    getValue(): ANYTHING {
        return this.value;
    }
}

const numberString = new AnythingToString(1253);
console.log(numberString.toString());
console.log(numberString.showType());
console.log(numberString.getValue());

const nullString = new AnythingToString(null);
console.log(nullString.toString());
console.log(nullString.showType());
// Notice that in this case, TypeScript tells us what exactly is returned by .getValue()!
console.log(numberString.getValue());



// More advanced example:
// We can narrow down the generic type, for example by limiting it to objects that have certain properties:

class ArrayLogger<TO_LOG extends Array<string>> {
    constructor(private value: TO_LOG) {}
    log(): void {
        console.log(this.value);
    }
}

// In this case, value can be passed to the Logger class - but only values that inherit from Array of string
// Which in practice means that it is not possible to call new Logger with other types of objects:
const printToLog = new ArrayLogger(['a', 'b', 'c']);
printToLog.log();

// Invalid entries:
// const printToLog2 = new Logger({});
// const printToLog3 = new Logger('123123');

// Finally!
// We can make a more useful example where you can log an array, just an array - but of any type:

class AdvancedArrayLogger<ARRAY_TYPE, TO_LOG extends Array<ARRAY_TYPE>> {
    constructor(private value: TO_LOG) {}
    log(): void {
        console.log(this.value);
    }
}

// rely on type inference:
const arrayToLog = new AdvancedArrayLogger([1, 3, 4, 5]);
arrayToLog.log();

// or write more explicitly
const arrayToLog2 = new AdvancedArrayLogger<string, string[]>(['c', 'd', 'e']);
arrayToLog2.log();


// An object that inherits from native Array will also work!
class MyStringArray extends Array<string> {
    constructor(...names: string[]) {
        super();
        this.push(...names);
    }
}

const myArray = new MyStringArray('mike', 'helen', 'jon');
const myArrayLogger = new AdvancedArrayLogger(myArray);
myArrayLogger.log();


// Generics in type definitions:
// type + interface

type Complex<Z> = {
    complexField: Z
}

const myCObject: Complex<string> = { complexField: 'hello' };
// [!] error:
// const myCObject2: Complex<string> = { complexField: 2132 };

// An example showing that there can be N properties - one or more in a generic type...
interface OtherComplex<STH, STH2> {
    something: STH;
    special: STH2;
}

const myOtherObject: OtherComplex<string, string[]> = {
    something: 'hello !',
    special: ['my', 'world']
}

// [!] Error:
// const myOtherObject2: OtherComplex<string, string[]> = {
//     something: 'hello !',
//     special: ['my', 1]
// }

export {}
