export interface Plataforms {
    plataform: {
        id: number;
        name: string;
        slug: string;
    }
}
export interface Games {
    slug?: string;
    name?: string;
    playtime?: number;
    plataforms?: Plataforms[];
    metacritic?: string;
    background_image?: string;
    id?: number;
}

export interface Results {
    count?: string;
    next?: string;
    previous?: string;
    results?: Games[] | null
}



export interface DetailGame {
    id?: number;
    slug?: string;
    name?: string;
    name_original?: string;
    metacritic?: string;
    description?: string;
    background_image?: string;
}