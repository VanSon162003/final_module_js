import httpsRequest from "../utils/httpsRequest";

const getMoods = async () => {
    const data = await httpsRequest.get("/moods");
    return data.data.items;
};

const getAlbum = async () => {
    const data = await httpsRequest.get("/home/albums-for-you");

    return data.data;
};

export default {
    getMoods,
    getAlbum,
};
