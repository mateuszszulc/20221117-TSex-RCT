/**
 * Typescript is not a nominally typed language.
 * Instead, it considers objects by their structure, but with certain rules.
 *
 * When it comes to polymorphism - mechanisms in TypeScript are very similar to other high-level languages.
 *
 * For example, if 2 classes implement the same interface - then we can specify a function parameter or a variable
 * having a type of this interface and assign instances of one or the other class to it
 *
 * Similarly, if 2 classes inherit from a base class, object instances of each class can be assigned
 * to the variable - instance of the base class.
 *
 * */

class Hardware {
    batteryLevel(): string {
        return 'low';
    }
}

class Keyboard extends Hardware {
    keyClicked = 'F5'
}

class Mouse extends Hardware {
    buttonClicked = 'right';
}


function checkBatteryLevel(pieceOf: Hardware) {
    console.log('battery level is: ', pieceOf.batteryLevel());
}

// Correct code thanks to the existence of the so-called covariance
checkBatteryLevel(new Keyboard());
checkBatteryLevel(new Mouse());


function checkClicked(pieceOf: Hardware) {
    // The following code won't work:
    // console.log('That wont work', pieceOf.keyClicked)

    // Type guards, and we also get syntax hint (!)
    if(pieceOf instanceof Keyboard) {
        console.log('Clicked key:', pieceOf.keyClicked);
    }
    if(pieceOf instanceof Mouse) {
        console.log('Clicked button:', pieceOf.buttonClicked);
    }
}

checkClicked(new Keyboard())
checkClicked(new Mouse())

// Other example:
interface IClickable {
    click(): void;
}

class RemoteControl implements IClickable {
    click(): void {}
}

class LcdScreen implements IClickable {
    click(): void {}
}

function delegateClick(something: IClickable) {
    something.click();
}

// Right code:
delegateClick(new RemoteControl())
delegateClick(new LcdScreen())
