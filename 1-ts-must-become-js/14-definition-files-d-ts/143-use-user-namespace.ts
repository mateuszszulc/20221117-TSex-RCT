// Special import notation as type only
// This will be removed when TS becomes JS.
import type { User } from './142-sample-namespace'
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export

const user: User = {
    get info() {
        return {
            id: 'fddbfd42-5a7c-4fff-8421-c978e4e509f0',
            userName: 'MyUser',
            description: 'no description provided'
        }
    }
}

/**
 Importing `type` will prevent you from writing this kind of code:
 console.log(user instanceof User)

 The point is that 142-sample-namespace defines a class that could theoretically be accessed
 e.g. in the Global Scope.

 In fact - it has no implementation! And we know it, so we don't want it to be treated as a value.
 (the actual "class")

 More in the module [4-classes](/4-classes)
 **/
