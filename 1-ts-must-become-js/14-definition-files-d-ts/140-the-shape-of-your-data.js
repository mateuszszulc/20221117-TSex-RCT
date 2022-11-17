/**
 * Typescript can co-exist with JavaScript
 *
 * Which is quite an interesting solution, but before we get to that, see the example below
 *
 *
 * Suppose we are making a simple math library...
 * We write everything in pure JavaScript and that's how we publish it on npm
 *
 * the library has its shape and is attached, for example, to our global space
 *
 * @typedef { import('./141-sample-interface').MathInterface } MathInterface
 *
 * https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
 *
 * CAUTION:
 * - in order for tsc and not our IDE to return an error in the console - we need 2 things:
 * > in the file `tsconfig.json` enabled flag: "allowJS": true
 * > at the top of the file comment: // @ts-check
 *    OR:
 * > enabled flag: "checkJs": true in `tsconfig.json` file [global solution for all JS files]
 * */

// Now try using methods from: mathOLib to check TS + Intellisense working:
/** @type {MathInterface} */
// - Uncomment the lines below and check it works:
// let mathOLib = {};
// console.log(mathOLib)

/**
 * Ultimately, in larger JS projects, we do not write .d.ts files "by hand",
 * Very common - libraries that are written in JavaScript on npm,
 * have their own dedicated files with type definitions.
 *
 * We'll see this with jQuery, a very popular DOM library.
 * The following commands were used in the jQuery project prepared for you:
 *
 * npm i jquery
 * npm i -D @types/jquery
 *
 * Check the project with jQuery (ts-examples) - to see how it works.
 * */



export {};
