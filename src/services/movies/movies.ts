import axios from "axios";

const api = axios.create({
    baseURL: "https://api.tvmaze.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getSingleShow = async (query: string) => {
    const response = await api.get("/singlesearch/shows", {
        params: { q: query },
    });
    return response.data;
};

export const getShows = async (query: string) => {
    const response = await api.get("/search/shows", {
        params: { q: query },
    });
    return response.data;
};

export const getShowSeasons = async (showId: number) => {
    const response = await api.get(`/shows/${showId}/seasons`);
    return response.data;
};

export const getSeasonEpisodes = async (
    seasonId: number,
    embed?: "guestcast" | string
) => {
    const response = await api.get(`/seasons/${seasonId}/episodes`, {
        params: embed ? { embed } : undefined,
    });
    return response.data;
};

export default api;