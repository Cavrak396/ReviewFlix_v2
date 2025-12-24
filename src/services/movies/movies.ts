import axios from "axios";

const api = axios.create({
    baseURL: "https://api.tvmaze.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export const getSingleShow = async (query: string) => {
    const response = await api.get("/singlesearch/shows", {
        params: {
            q: query
        },
    });

    return response.data;
};

export default api;
