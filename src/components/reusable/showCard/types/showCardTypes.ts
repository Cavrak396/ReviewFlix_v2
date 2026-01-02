export interface MovieType {
    name: string;
    genres: string[];
    image: {
        original: string;
    }
}

export interface ShowTypes {
    className: string;
    show: {
        image: {
            original: string;
        }
    }
}

export interface ShowCardBaseProps {
    className: string;
}

export interface ShowCardListTypes {
    className: string;
    movies: MovieType[];
}