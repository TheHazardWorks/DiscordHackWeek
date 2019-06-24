export interface User {
    _id: string,
    username: string,
    discrim: string,
    avatarURL: string,
    summary: string;
    doesCharge: boolean;
    available: boolean;
    workTypes: string[];
    discord: Discord | null;
    accounts: Social[];
}

export interface Discord {
    name: string,
    link: string,
}

export interface Social {
    username: string,
    link: string,
}