/**
 *
 * Regarding `interface` and `type` - they represent something that is finally, in transpile process,
 * disappear from the output code. Does not exist in runtime!
 *
 * class - this is the simultaneous writing of the type and the value. It exists natively and will be in the output code.
 */

// The main difference between type and interface:

// type can be a simple type alias or a type union
type Money = number
type Flag = 'on' | 'off' | 'unset'
type SomeMoney = {
    value: number
}

// interface can ONLY be OBJECT!
interface MyMoney {
    value: number
}

// The difference is also when extending the functionality of type and interface
// This is well documented in the documentation:
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// We use both type and interface by "plugging" into the existing logic, e.g.
const simpleSample: MyMoney = { value: 300 }
const simpleSample2: SomeMoney = { value: 100 }


// A class is both a type and a value:
class MoneyAmount {
    constructor(public value: number) {}
}

// This allows us to instantiate objects:
const moneyInstance = new MoneyAmount(200);
const moneyInstance2 = new MoneyAmount(300);

// And use instanceof keyword in runtime:
console.log(moneyInstance instanceof MoneyAmount)
console.log(moneyInstance instanceof Object)

// Typescript keeps an eye on us and knows which fields are instanced:
console.log(moneyInstance.value);
// operation not allowed:
// moneyInstance.newDynamicField = 'Hello!'
