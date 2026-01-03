export interface BaseMediaShow {
    name: string;
    genres: string[];
    image: {
        original: string;
    }
}

export interface BaseMediaShowProps {
    movies: BaseMediaShow[];
}