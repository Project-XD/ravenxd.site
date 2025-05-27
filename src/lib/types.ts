export interface Config {
    id: number;
    name: string;
    creator: string;
    updated: string;
    tags: string[];
    anticheat: string | string[];
    description: string[];
    cover: string;
    ip: string;
    downloadLink: string;
    otherButtons: [string, string][];
    colors: {
        text: string;
        accent: string;
        header: string;
    };
}