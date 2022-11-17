/**
 *
 * Attempting to run this file in Node.js will fail.
 * Attempting to run this file in Browser will also fail!
 *
 * node 06-node-does-not-understand.ts
 *
 * It will not work !
 *
 * Even though it's OK from TS point of view, it's not JavaScript.
 * Development TypeScript must therefore become Production JavaScript.
 *
 * Production environment can be: Browser or Node.js !
 * The TypeScript compiler (transpiler) must be "plugged" into our development pipeline.
 * */

const hello: string = 'Hello';

console.log(hello);

/*
  - what do we have to do to run the code?

  - we have 2 options:
     1. Install (npm install typescript) + configure and run the transpiler: tsc

     2. Install the ts-node package globally -> it is a REPL for TypeScript - then the file will work on (ts-node name.ts)
* */

// #Task:
// Do both options. However, install typescript globally as:
// npm install -g typescript

// then we will have access to "typescript compiler" = tsc
