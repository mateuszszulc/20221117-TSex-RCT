/**
 * TypeScript offers various helper generic types in its arsenal,
 * so-called Util Types
 *
 * With which we create new types based on existing ones.
 * We modify the behavior of existing types.
 *
 * https://www.typescriptlang.org/docs/handbook/utility-types.html
 * */

interface Address {
    street: string;
    no: number;
    houseNo?: number;
}

interface Client {
    name: string;
    lastName: string;
    tags: string[];
    address: Address;
}

// Partial
// We make all fields optional:
type OptionalClient = Partial<Client>;
const client: OptionalClient = {};

// Required
// We convert all fields to be required:
type FlatAddress = Required<Address>;
const flatAddress: FlatAddress = { no: 10, houseNo: 1, street: 'Mickiewicza' };

// Readonly
// We convert all fields to "read only":
type VipClient = Readonly<Client>;
const vipClient: VipClient = {
    address: { no: 20, street: 'Dąbrowska' },
    name: 'Krzysztof',
    lastName: 'Jarzyna',
    tags: ['szczecin']
}
// Operation not allowed!!
// vipClient.name = 'John';


// Record
// We create an Object Type where the keys listed as Union - will be its fields,
// And the values will have type of the second given type argument in the generic:
const myRecord: Record<'superClient' | 'buyer' | 'contact', OptionalClient> = {
    superClient: { name: 'John' },
    buyer: {tags: ['trusted', 'wealthy']},
    contact: { lastName: 'Kowalsky' },
}

// Pick
// We create a "subset" of the object type, selecting only the fields of interest from the object
type User = Pick<Client, 'name' | 'lastName'>
const myUser: User = { lastName: '', name: '' }

// Omit
// Similar to Pick, but on the other hand: we exclude values from our subset.
type HouseAddress = Omit<Address, 'houseNo'>
const house: HouseAddress = { no: 1, street: 'Zamojskiego' }


export {}
