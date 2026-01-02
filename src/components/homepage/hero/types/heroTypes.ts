export interface MovieType {
    name: string;
    genres: string[];
    url?: string;
    summary?: string;
}

export interface MoviePropsType {
    movie: MovieType | null;
}

export interface MovieGenreType {
    item: string;
}

export interface MovieButtons {
    id: number;
    text: string;
    icon: string;
    type: string;
}

export interface MovieButtonProps {
    item: MovieButtons;
    movie: MovieType | null;
}

export interface ScoredShow {
    name: string;
    genres: string[];
    image: {
        original: string;
    }
}

export interface ScoredShowProps {
    movies: ScoredShow[];
}