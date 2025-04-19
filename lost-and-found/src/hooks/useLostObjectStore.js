import Swal from "sweetalert2";
import { lostAndFoundApi } from "../API"

export const useLostObjectStore = ( ) => {

    const getQrs = async( quantity ) => {
        const { data } = await lostAndFoundApi.post('/qrs/generate', null, {
            params: { quantity }
        });
        return data;
    }

    const startRegister = async({ name, description, userEmail, qrValue }) => {
        try {
            console.log({name, description, userEmail, qrValue});
            await lostAndFoundApi.post('/lost-objects', { name, description, userEmail, qrValue });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al registrar el objeto',
                text: "No se pudo registrar el objeto. Por favor, inténtelo de nuevo más tarde.",
                confirmButtonText: 'Aceptar'
            });
        }
    }

    return {

        getQrs,
        startRegister

    }

}