interface Company {
    catchPhrase: string
}

export interface User {
    id: number;
    name: string;
    email: string;
    company?: Company;
    website?: string;
}