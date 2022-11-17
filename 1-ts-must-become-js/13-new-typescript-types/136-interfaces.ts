/**
 * Interface behaves very much like a type.
 * Except that it always applies to an object.
 * It is not possible to create an interface for a simple type.
 * We must always have min. One field or method.
 *
 * Interface exists only in TS - like `type`. In this case, after transpilation, it leaves no trace.
 *
 * Other interface behaviors are similar to other object-oriented languages.
 * - The interface shows only the shape of the data - it does not have implementation details,
 * - all its fields are public,
 * - can be implemented by a class.
 *
 * https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
 * */

interface Slogan {
    id: number;
    type: string;
    title: string;
    isHanged?: boolean;
}

const sampleData: Slogan = {
    id: 1,
    title: 'All for $2 today!',
    type: 'marketing'
}

// Of course, the interface can be used in a more classic way
// Together with classes - as ensuring that they implement the same functionalities

interface IFlying {
    fly(height: number): void;
    isOnTheGround?: boolean;
}

class Airplane implements IFlying {

    isOnTheGround = true;

    fly(height: number): void {}
}

// Uncomment to see the error:
// class Balloon implements IFlying {}

// In the example above, we make sure that both Airplane and Balloon
// can fly and implement the same methods
// The interface always provides fields and methods as public.

// Now when we've fixed the Balloon class, we can uncomment:
function makeMeFlyToThe(flayer: Airplane /*| Balloon*/, height = 0) {

    if(flayer.isOnTheGround) {
        flayer.fly(height);
    }
}

// Interfaces can be extended - based on other interfaces.
interface CanMove {
    move(): void;
}

interface CanJump {
    jump(): void;
}

// Combining two interfaces with `CanDance`:
interface CanDance extends CanMove, CanJump {}

class Dancer implements CanDance {
    move(): void {}
    jump(): void {}
}
