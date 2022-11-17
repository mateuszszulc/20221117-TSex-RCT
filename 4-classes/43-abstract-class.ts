/**
 * Abstract class - this is a special kind of class that you have to inherit from to get an instance.
 * It is not possible to instantiate an abstract class directly.
 *
 * This is the result of its use - similar to the interface, using the keyword in the class
 * "abstract" can declare the shape of fields and methods, without details of their implementation.
 *
 * However, we also have the option of adding fields and methods in a standard way - where we implement the way they work.
 *
 * */

// Here's the abstract class:
abstract class TheThing {}

// The idea behind it is similar to other high-level languages,
// that use abstract classes:

// For example:
// - TheThing could not be instantiated:
// const something = new TheThing();

// Instead, we want other classes to inherit from TheThing:
class Bicycle extends TheThing {}


// An abstract class is a bit like an interface...
// The difference is that - the interface has no implementation details.
// In the case of an abstract class - elements defined as abstract will not have implementation details
// others can have their own implementation:

abstract class OtherThing {
    protected abstract name: string;

    abstract hello(): void;

    greetings(): void {
        console.log('Hello, my name is', this.name);
    }
}

class Something extends OtherThing {
    // [!] you can change the modifier to public for example!
    public name = 'Something'

    hello(): void {
        console.log('Hello World');
    }
}

const aThing = new Something();
console.log(aThing.name);
aThing.hello();
aThing.greetings();

