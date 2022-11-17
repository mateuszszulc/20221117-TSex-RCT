/**
 * The objects we created so far were assigned right away - however
 * did not give us freedom similar to "class"
 * where, based on the class (definition), you can create object instances.
 *
 * In 2015, the `class` keyword enters JS.
 * It allows you to make classes in JS - but it does not degenerate the language.
 * In fact, after the transpilation process, for ES5 the class - is a function (as it was in classic JS before 2015).
 *
 * In this arrangement, the class keyword is just the so-called syntactic sugar.
 * */

// The class behaves very much like classical high-level languages
// It determines the shape of the object (its type) and allows instantiation

// The smallest number of elements needed for the class to exist:
class Simple {}

const obj = new Simple();
// Of course, our class doesn't define any fields,
// in TypeScript (unlike in JS) it cannot be extended dynamically.
// obj.name = 'ok';

// Fields in classes are public by default:
// when declaring them - either initialize them or make them optional
class SuperCat {
    name = '';
    age?: number;
}

const myFirstCat = new SuperCat();
myFirstCat.name = 'Mruczek';
myFirstCat.age = 2;

// A field in a class can be public, private or protected:
class Example {
    private notAccessibleOutsideAClass = true;
    protected accessibleForInheritanceOnly = true;
    public visibleAndAccessibleForAnyone = 'access to all !';
    visibleAndAccessibleForAnyoneByDefault = 'access to all !';
}

// We can also make the fields read-only:
// and give the class a constructor,
// in this layout at the time of constructing the instance - we can name the movie,
// but we can't change it later!
class Movie {
    readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const myMovie = new Movie('The Witcher');
console.log(myMovie.name)
// The operation below is not allowed:
// myMovie.name = 'The Gathering';

// There can only be one constructor in a class.
// TypeScript offers us an idiom to write the above in abbreviated form
// Just move the field modifiers (public readonly) to the constructor parameter

// Movie [===] OtherMovie

class OtherMovie {
    // a short form to express exact same thing that we have above in Movie !!!
    constructor(public readonly name: string) {}
}

const myOtherMovie = new OtherMovie('Friends');
console.log(myOtherMovie.name)
// myOtherMovie.name = 'That 70s show';


// In the class, as in the type and interface - we can have optional fields:
class MountainTroll {
    name?: string;
}

const barney = new MountainTroll();
const ricky = new MountainTroll();
ricky.name = 'Ricky'


// A class can have methods, but as in JavaScript - they cannot be "overloaded"
// there is also no way to reload constructors

class Person {
    name = 'Unknown';

    sayYourName() {
        console.log(this.name);
    }
    // operation not allowed! You can't have 2 same named methods:
    /*
    sayYourName(prefix: string) {
        console.log(prefix, this.name);
    }
    */
}
