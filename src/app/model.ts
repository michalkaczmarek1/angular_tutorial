export interface Customer {
    name: string;
    photoUrl: string;
    desc: string;
    age: number;
    address: Address,
    type: CustomerType;
    categories: string[];
}

interface Address {
    street: string;
    houseNumber: number;
    city: string;
}

export enum CustomerType {
    Standard,
    Premium,
    VIP
}