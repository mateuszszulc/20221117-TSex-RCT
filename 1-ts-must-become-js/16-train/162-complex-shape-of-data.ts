/**
 * Task 1.6.2:
 *
 * Without interfering with implementation details,
 * convert from :any into the appropriate types - according to program intentions.
 * ... this time we are dealing with more complex types
 *
 * after correcting the types, change the implementation, use the `joiner` function
 * - where possible (e.g. - first name + last name)
 * next:
 * - create the appropriate objects and pass them to `giveFullName` to confirm that the code works correctly
 * */


// const array = ['', '', '']

// joiner(array) //?

function joiner(strTuple: [string, string, string?]): string {
    return strTuple.join(' ');
}


interface User {
    name: string;
    lastName: string;
    sex?: 'female' | 'male';
    vipStatus: boolean;
    //shout() :void
}

const myUser: User = {
    name: 'John',
    lastName: 'Kowalsky',
    sex: 'male',
    vipStatus: false,
    // shout(): string {
    //    return '' 
    // }
}

// that will not work (which is what we intended (@see interface above))
// myUser.shout().toUpperCase()

giveFullName(myUser) //?

function giveFullName(myUser: User): string {
    const fullName: string = joiner([myUser.name, myUser.lastName])
    let prefix = '';
    let suffix = '';
    if (myUser.sex === 'female') {
        prefix = 'Mrs.';
    } else if (myUser.sex === 'male') {
        prefix = 'Mr.';
    }
    if (myUser.vipStatus) {
        suffix = ' - the VIP'
    }
    return joiner([prefix, fullName, suffix]);
}

export { };

