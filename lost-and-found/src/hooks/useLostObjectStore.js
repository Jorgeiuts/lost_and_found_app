import { lostAndFoundApi } from "../API"

export const useLostObjectStore = ( ) => {

    const getQrs = async( quantity ) => {
        const { data } = await lostAndFoundApi.post(`/qrs/generate`, null, {
            params: { quantity }
        });
        return data;
    }

    return {

        getQrs,

    }

}