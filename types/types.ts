export interface Trick {
    name: string,
    description: string,
    level: string,
    noSides: boolean | undefined,
    mentions: string[] | undefined,
}

export interface SkatePlayer {
    name: string, 
    letters: string, 
    letterCount: number, 
    hasTried: boolean, 
    isOut: boolean
}