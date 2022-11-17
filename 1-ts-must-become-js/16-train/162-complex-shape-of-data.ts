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
 

function joiner (strTuple: [string, string]): string  {
    return strTuple[0] + ' ' + strTuple[1];
}

interface User {
    name: string;
    lastName: string;
    sex: string;
    vipStatus: boolean;
}

function giveFullName(myUser: User): string {
    const fullName: string = myUser.name + ' ' + myUser.lastName;
    let prefix = '';
    let suffix = '';
    if(myUser.sex === 'female') {
        prefix = 'Mrs.';
    } else if(myUser.sex === 'male') {
        prefix = 'Mr.';
    }
    if(myUser.vipStatus) {
        suffix = ' - the VIP'
    }
    return prefix + ' ' + fullName + suffix;
}

export {};

