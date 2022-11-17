/**
 * Sometimes it happens that we already have some logic defined.
 * It counts and works.
 *
 * However, we need a type - to describe this piece of logic.
 *
 * Here, on the one hand - no problem, you just need to add one more interface or type.
 * On the other hand, you only need to "rewrite" it as a type
 *
 * ... is there any way to not "type too much"...?
 * */

function makeACoffee(beans: string, timeOfBlend: number | string, amount: number): string {
    // Imagine some wierd logic here.... blah blah blah...
    return 'Java Coffee Cup - 200ml'
}

// We now have a new CoffeeMaker, and we want type safety for the method: start,
// This is intended to be an exact representation of what the makeACoffee function above assumes.

// Note that the idea is not to have to type:
// type MakeACoffeeFn = (beans: string, timeOfBlend: number | string, amount: number) => string;

// Solution:
interface CoffeeMaker {
    name: string;
    coffeeBeansVolume: number;
    start: typeof makeACoffee;
}

// Now we've just derived the type for the start method, based on what already existed in the code.
// See the effect of the action:

// Hint: after removing the comment below, use "implement all members" - it will be faster :)
// const myMaker: CoffeeMaker = {}


// https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
export {}
