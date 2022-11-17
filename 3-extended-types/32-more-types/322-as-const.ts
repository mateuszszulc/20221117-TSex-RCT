/**
 * The notation (as const) is the so-called const-assertions
 *
 * It allows us to make an immutable type of existing object.
 *
 * https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#readonly-and-const
 * **/


const user = { name: 'Michał', tags: ['sport'] }

user.name = 'Kasia'
user.tags.push('bicycle')

// That's ok because this reference is constant:
// However, it points to an object in memory, but it is mutable (as in Java)
// now it will be bad:
// user = { name: 'Krzysiek' }
// const in JS means - you cannot re-assign!

// However, if we do this:
const myOtherUser = { name: 'Basia', tags: ['rock'] } as const

// Operations not allowed! myOtherUser is now immutable!
// myOtherUser.name = 'Krzysiek'
// myOtherUser.tags.push('pop')


// This is equivalent to this case (if we want to define the type by hand):
interface NamedUser {
    readonly name: string
    tags: readonly string[]
}

const myTypedUser: NamedUser = { name: 'Katarzyna', tags: ['beauty', 'adventure'] }

// Operations not allowed:
// myTypedUser.name = 'Ania'
// myTypedUser.tags.push('new')



export {}
