/**
 * One of the undoubted advantages of TS is its ability to migrate the project in stages.
 * This is important for any Node.js project
 *
 * Because TypeScript is a superset of JS - it can mix 2 types of files in a project.
 *.js and .ts
 *
 * Also gives undefined and any types and ways to ignore whole file checking
 * or only the next line from the TS.
 *
 * You simply have on board a whole set of tools
 * allowing you to ADAPT TS to ANY project written in Node.js.
 * Importantly, you don't need to do this migration
 * In one day. You can still run and develop the code on each step of migration.
 *
 *
 * https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html
 * */

// 1. Helper types "any" and "unknown" - when we don't know what type we pass exactly
function iCannotFindAGoodName(a: any, b:any, c: unknown) {
    return a + b + c;
}


// 2. Ignore line check
let cannotBeNumber = 'my string';
// @ts-ignore
cannotBeNumber = 123;


// 3. Ignore checking for the entire file
// Write: // @ts-nocheck at the top of the file (comment)


// 4. "I know better" type assurance when writing code:
interface Book {
    name: string;
    ISBN: string;
    aged?: number;
    isGood: boolean;
}

const myBook: Book = { name: 'Not enough data - but works ?!' } as Book;

// which of course has consequences,
console.log(myBook.isGood)


// However, it might be handy in some cases: e.g. when testing ts code!
//

// https://react-typescript-cheatsheet.netlify.app/docs/migration/from_js
// https://speakerdeck.com/amhinson/convert-a-react-native-project-to-typescript-in-10-minutes
