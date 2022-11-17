/**
 * Union type in Typescript.
 *
 * Combination of several types using the | operator
 * This can be read literally as OR
 *
 *
 * numbers | string
 *
 * This means that, for example, a given variable can be of the type either:
 * - number,
 * - string
 *
 * This seems a bit strange, why do I need a type that is "either / or", however, in the context of how JS works,
 *this makes a lot more sense.
 *
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
 * */

// PROBLEM:
// There is no "constructor overloading" or method overloading in JavaScript.

// SOLUTION:
// Union type, i.e. a given variable/constant can be either one or the other (...or nth)

interface Currency { value: number, name: string }

class Order {

    payment(cashAmount: number | string | Currency) {
        if(typeof cashAmount === 'number') {
            
        } else if(typeof cashAmount === 'string') {
           
        } else {
          
        }
    }

    
}

new Order().payment(123.2);
new Order().payment('2333.99');
new Order().payment({value: 2003, name: 'USD'});

// PROBLEM:
// We have "flags" supporting STATE, and we want to validate them.

// SOLUTION:
// Union type, and in a cosmic edition, because here literally values are data type d(o . O)b !!
type Status = 'error' | 'loading' | 'pending' | 'success';

let result: Status = 'loading'


interface Request {
    data: unknown;
    status: Status;
}

const ajaxRequest: Request = { status: 'loading', data: {}  }


// CAUTION:
// There is overloading of type signatures in TypeScript.
// So you can find entries where the type will be overloaded.
// In practice, however, this will be applied to *.d.ts files and only used for type definitions.
// We're still talking about types here, these writings don't affect runtime!

export {}


