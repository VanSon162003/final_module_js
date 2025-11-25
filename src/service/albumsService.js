import httpsRequest from "../utils/httpsRequest";

const getOne = async () => {
    const data = await httpsRequest.get(
        "/albums/details/691cb4f9dd97648f5975792a"
    );

    return data.data.tracks;
};

export default {
    getOne,
};
