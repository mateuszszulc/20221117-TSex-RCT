/**
 * Extracting new types from existing ones.
 *
 * For example, we need a type representing a list of possible actions
 * from the interface.
 *
 * https://www.typescriptlang.org/docs/handbook/2/types-from-types.html
 * https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
 * */

interface UserActions {
    makeUser(name: string): void;
    getUser(id: number): string;
    updateUser({} : {name: string, age: number}): string;
    deleteUser(id: number): void;
}

// look at the keyof keyword here.
type PossibleUserActions = keyof UserActions;


const actionFromSerializer: PossibleUserActions = 'makeUser';
const actionFromSerializer2: PossibleUserActions = 'getUser';


// What if the data object already exists and is being inferred?!
const myFancyImagination = {
    rabbit: 'white',
    john: 'Wick',
    alice: 'from->wonderland',
    that: 'is it?'
}

// ... hmmm and who will stop The Rich from combining previously learned operators?
const myOptions: keyof typeof myFancyImagination = 'rabbit';

export {}
