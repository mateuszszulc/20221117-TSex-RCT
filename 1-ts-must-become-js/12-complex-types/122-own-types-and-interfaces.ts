/**
 *
 * The beauty of TypeScript is the ability to write type (TS) and value (JS) separately
 *
 * In this arrangement, we can keep an eye on the moment of assignment by specifying this type beforehand.
 * We have the ability to define all sorts of types.
 * We will be able to do this even for existing JS code (details later in .d.ts files)
 *
 * Typescript basically introduces 2 keywords to help code, write types:
 *
 * - type
 * - interface
 *
 * */

type SuperUser = {
    name: string;
    isAdmin: boolean;
    age?: number;
    checkIsAdmin?(): void;
}

let myUser: SuperUser;

// Uncomment and assign a new user:
// myUser = {};


// Alternatively, we can use the interface for this purpose:
interface MySuperUser {
    name: string;
    isAdmin: boolean;
    age?: number;
    checkIsAdmin?(): void;
}

let myOtherUser: MySuperUser;

// after uncommenting
// Use "implement all members" or "implement all required members" from IntelliJ here
// myOtherUser = {}


// Both interface and type can be implemented by a class
// So we can use the interface for purposes straight from other OOP languages.

// Interface can be used to build others:
interface MyHero extends MySuperUser {
    superPower: string
}

// We can do the same with type (different notation):
type Hero = SuperUser & { superPower: string }


// such a call will not be possible, but only if there is a flag in tsconfig.json: "strict": true
myOtherUser.checkIsAdmin()

// This is a good option because to make sure the method exists and call it safely,
// we need to write:
myOtherUser?.checkIsAdmin?.()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
