export interface GetGroupsResponse {
    result: 1 | 0;
    data?: Group[];
    total?: number;
}

export interface Group {
    id: number;
    name: string;
    closed: boolean;
    avatar_color?: string;
    members_count: number;
    friends?: User[];
}

export interface User {
    first_name: string;
    last_name: string;
}

export type GroupFilter =
    | {
        key: 'closed',
        value: boolean,
    } | {
        key: 'avatar_color',
        value: string | undefined,
    } | {
        key: 'friends',
        value: boolean,
    }
