export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    position_id: number;
    registration_timestamp: number;
    photo: string;
}

export type NewUser = Pick<User, "name" | "email" | "phone"> & {
    position_id: string;
    photo: File[];
};

export interface Links {
    next_url: string | null;
    prev_url: string | null;
}

export interface GetUsersResponse {
    success: boolean;
    total_pages: number;
    total_users: number;
    count: number;
    page: number;
    links: Links;
    users: User[];
}

export interface GetUserRequestParams {
    page: number;
    count: number;
}

export interface GetTokenResponse {
    success: boolean;
    token: string;
}

export interface CreateNewUserResponse {
    user_id: number;
    success: boolean;
    message: string;
}
