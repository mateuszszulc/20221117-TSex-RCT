/**
 *
 * Inheritance in TypeScript behaves similarly to classic JavaScript.
 * Since 2015, we have the option to use syntactic sugar and two words
 * keywords: `class` and `extends`.
 * After transpiration, the code looks like this - as if we were using prototype chain inheritance in JS.
 *
 * In this case, the rules are very similar to those of class inheritance in JS.
 * e.g.
 * We use the `extends` keyword
 * Using the constructor - we need to refer to super()
 *
 * Additionally:
 * Using field modifiers such as `protected` allows you to protect it from outside access
 * and allow access inside classes to field values or method calls.
 * */


// Base class
class Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// A simple inheritance example:
class Mammal extends Animal {
    constructor(public name: string) {
        // This super call is discussed below
        super(name);
    }
}

class Reptile extends Animal {
    constructor() {
        super('Snake');
    }
}

// In TypeScript, you can only inherit from 1 base class,
// This means that if we had, for example, a 2nd Mechanical class and wanted to do a Mechanical Animal - it is not possible
class Mechanical {}

// Operation not allowed:
// class Amphibian extends Animal, Mechanical{}

// A given class can implement multiple interfaces - but cannot inherit from multiple classes.
// This behavior is similar to classic JavaScript behavior.

// There are 2 facts related to inheritance:

// If you inherit and have a constructor in your class, it must refer to the base class with:
// super();
// If the base class also has a constructor, it looks like the example above:
// Reptile - Animal
// Mammal - Animal

// However, if the Mechanical class doesn't have a constructor declared Explicitly?

class MechanicalBird extends Mechanical {
    constructor(public name?: string) {
        // I'm using a constructor here, and because I'm inheriting, I need to write super();
        // Even though Mechanical doesn't have an explicitly written constructor, it's still required
        super();
    }
}

// Examples with an instance:
const pigeon = new MechanicalBird();
console.log(pigeon.name);

const owl = new MechanicalBird('White Owl');
console.log(owl.name);


// On the example of inheritance, you can see the availability of fields:

class Mineral {
    protected name = 'unknown mineral...';
    amount = 0;
    private notVisible = 'scratched';
}

class Gold extends Mineral {
    public info: string;
    constructor() {
        super();
        this.name = 'Gold';
        this.info = `${this.name} quantity: ${this.amount} ounces`;
        // operation not allowed:
        // console.log(this.notVisible);
    }
}

const myTreasure = new Gold();
// operation not allowed:
// console.log(myTreasure.name)

console.log(myTreasure.info)
console.log(myTreasure.amount)
