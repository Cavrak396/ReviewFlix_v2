export interface BaseMediaShow {
    name: string;
    genres: string[];
    id?: number;
    number?: number;
    image: {
        original: string;
    }
}

export interface BaseMediaShowProps {
    movies: BaseMediaShow[];
}