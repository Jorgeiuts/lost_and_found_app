import Swal from "sweetalert2";
import { lostAndFoundApi } from "../API"
import { useDispatch, useSelector } from "react-redux";
import { onScaanLostQr, onScaanRetrieveQr } from "../store";

export const useLostObjectStore = ( ) => {

    const { lostObjects, isObjectLost, error } = useSelector( state => state.lostObjects );
    const dispatch = useDispatch();

    const getQrs = async( quantity ) => {
        const { data } = await lostAndFoundApi.post('/qrs/generate', null, {
            params: { quantity }
        });
        return data;
    }

    const startRegister = async({ name, description, userEmail, qrValue }) => {
        try {
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

    const startScaanQr = async( qrValue ) => {
        try {
            const { data } = await lostAndFoundApi.get(`/lost-objects/QR/${qrValue}`);
            if ( data.status ) {
                dispatch( onScaanRetrieveQr({name: data.name, description: data.description, email: data.userEmail, qrValue }) );
            } else {
                dispatch( onScaanLostQr({name: data.name, description: data.description, email: data.userEmail, qrValue }) );
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al escanear el QR',
                text: "No se pudo escanear el QR. Por favor, inténtelo de nuevo más tarde.",
                confirmButtonText: 'Aceptar'
            });
        }
    }

    return {

        lostObjects,
        isObjectLost,
        error,

        getQrs,
        startRegister,
        startScaanQr

    }

}