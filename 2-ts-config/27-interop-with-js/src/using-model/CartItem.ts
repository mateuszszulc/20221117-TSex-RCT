type UUID = string;

export interface CartItem {
    readonly id: UUID,
    name: string,
    description?: string,
    price: number
}
