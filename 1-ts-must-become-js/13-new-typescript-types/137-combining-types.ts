/**
 * Often in JavaScript we combine several values from different objects
 * into one object with multiple fields/methods etc.
 *
 * Do we have to "redefine" the type each time to get its current (different) shape?!?!
 *
 * Fortunately not, from several types, we can assemble one:
 * */

// The interface can of course be combined conventionally with extend:

interface Numeric { luckyNumber: number }
interface Winner { userName: string }

interface NumericWinner extends Numeric, Winner {}

const lottery: NumericWinner = { luckyNumber: 7, userName: 'Janusz' }


// However, interfaces can be "extended" over time, and this is not a compiler error. For example

interface Work { payment: number }
interface Work { jobName: string, placeOfWork: string }
interface Work { isCool?: boolean }

const mySuperJob: Work = { placeOfWork: 'company', jobName: 'programmer', isCool: true, payment: 15000 }


// You can't do the same with types:
type Money = { value: number };
// Uncomment the following to see the error:
// type Money = { currency: string };

// Types, however, can be combined with each other, using the & operator - regardless of whether it's a type or an interface

type MySuperMoneyWork = Work & Money;

const myNewTypedThing: MySuperMoneyWork = { value: 1, ...mySuperJob };

// We combine the notations we have learned so far and use here:
type WorkOnTheLottery = {isAwesome: boolean} & Numeric & Winner & Work;

// const whatIsThis: WorkOnTheLottery = {  }

export {}
