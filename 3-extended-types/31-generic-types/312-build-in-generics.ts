// in programming there are constructions that store e.g. collections of elements
// they all don't know at the time of declaring what type the elements will be
// therefore they must be declared as generic classes.
// Other examples are of course: Set and Map

let mySampleSet = new Set<number>();
let mySampleMap = new Map<number, string>();

// From this notation, it follows that Set will store values of type number
// A Map - values of the type: number as keys - string as values

// What if these constructs didn't have generic definitions?
const freestyleSet = new Set<unknown>();

freestyleSet.add(1);
freestyleSet.add('hello');
freestyleSet.add('hello');
freestyleSet.add(true);

// One of the key built-in Generics is of course Promise,

const numericPromise = Promise.resolve(3)
// Hover over numericPromise to see the inferred type: Promise<number>

async function makeStringPromise() {
    return 'Hello M8!'
}

function makeStringPromise2() {
    return Promise.resolve('Hello M8!')
}

const myStringPromise: Promise<string> = makeStringPromise();

myStringPromise
    .then((value: string) => {
        console.log(value)
    })
    .catch((error?: any) => {  // according to the type signature, the error may be :any !
        console.log(error)
    })


