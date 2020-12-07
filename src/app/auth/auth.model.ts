export interface AuthRequest {
    username: string;
    password: string;
}


export interface CheckTokenResponse {
    authorities: string[];
    name: string;
}