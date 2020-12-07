export interface Account {
    id: string;
    username: string;
    password: string;
    createdDate: Date;
    createdBy: string;
    updatedDate: Date;
    updatedBy: string;
}

export interface Role {
    id: string;
    name: string;
    description: string;
}
