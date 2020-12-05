export interface ApiResponse<T> {
    code: number;
    message: string;
    payload: T;
}

export interface Page<T> {
    content: T[];
    pageable: {
        sort: any;
        pageNumber: number;
        pageSize: number;
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    first: boolean;
    empty: boolean;
}