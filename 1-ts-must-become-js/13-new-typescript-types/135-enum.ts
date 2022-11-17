/**
 *TypeScript introduces the enum keyword which is treated specially.
 *
 * Code from Enum must appear in the resulting JS to run in Runtime.
 * Check the transpiled version of this file.
 *
 * https://www.typescriptlang.org/docs/handbook/enums.html
 * */

enum QuickEnum {
    ZERO,
    ONE,
    TWO,
    TREE
}

let eTree = QuickEnum.TREE;
let eTwo = QuickEnum.TWO;

console.log(eTree)
console.log(eTwo)
console.log('Reverse mapping', QuickEnum[eTree])

// Of course, we can provide our own values for the keys:
// P.S. they don't have to be numbers
enum Apartment {
    BIG = 100,
    MEDIUM = 90,
    SMALL = 10,
    LITTLE = 3
}

export {}
