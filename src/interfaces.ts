export interface User {
    _id: string,
    username: string,
    discrim: string,
    avatarURL: string,
    summary: string;
    discord: Discord;
    accounts: Social[],
}

export interface Discord {
    id: string;
    name: string,
    link: string,
}

export interface Social {
    username: string,
    link: string,
}