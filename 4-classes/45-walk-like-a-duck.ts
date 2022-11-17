/**
 * TypeScript checks data structure and shape.
 *
 * Which means we can do something very strange without consequences...
 * */

// Note that: a class is a notation that can be used as both a type and a value at the same time.
class Dog {
    name: string;
    breed: string;
}

class Cat {
    name: string;
    breed: string;
    // legs: number;
}

const barkingDog: Dog = new Dog();
const barkingCat: Cat = new Dog(); // Okay ---- BUT HOW?! no error?!

// No - because TypeScript is structurally (not nominally) typed.

// The above won't work in Nominally typed languages, because Cat and Dog are 2 different things.

/**
 * TypeScript looks at whether the Cat type is contained in the Dog type,
 * that is, in other words, whether Dog has all the fields required by Cat.
 * if yes - this allows for assignment.
 *
 * It will not allow if you add at least one more field to Cat - then, Dog not having the required field or method,
 * not assignable to Cat.
 *
 * However, it all boils down to comparing the structure of the data.
 * */

export {}
