export declare class User {
    constructor(name: string, description?: string);
    get info(): UserAPI.Info;
}

declare namespace UserAPI {
    export type UUID = string
    export interface Info {
        id: UUID;
        description: string;
        userName: string;
    }
}
