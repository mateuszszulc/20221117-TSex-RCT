interface Company {
    catchPhrase: string
}

// That will be merged to Company
// interface Company {
//     id: number;
// }

// [].push();

// [].flat();


//If we want to send POST request and have base shape without id: 
interface BaseUser {
    name: string;
    email: string;
    company?: Company;
    website?: string;
}

export interface User extends BaseUser {
    id: number;
}