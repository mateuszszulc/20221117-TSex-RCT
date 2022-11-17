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

function joiner (strTuple: any): any  {
    return strTuple[0] + ' ' + strTuple[1];
}

function giveFullName(myUser: any): any {
    const fullName: any = myUser.name + ' ' + myUser.lastName;
    let prefix: any;
    let suffix: any;
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

