import { lostAndFoundApi } from "../API"

export const useLostObjectStore = ( ) => {

    const getQrs = async( quantity ) => {
        const { data } = await lostAndFoundApi.post('/qrs/generate', null, {
            params: { quantity }
        });
        return data;
    }

    const startRegister = async({ name, description, userId, qrId }) => {
        try {
            await lostAndFoundApi.post('/lost-objects', { name, description, userId, qrId });
        } catch (error) {
            console.log(error);
        }
    }

    return {

        getQrs,
        startRegister

    }

}