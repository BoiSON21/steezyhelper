export interface Trick {
    name: string,
    description: string,
    level: string,
    noSides: boolean | undefined,
    mentions: string[] | undefined,
}