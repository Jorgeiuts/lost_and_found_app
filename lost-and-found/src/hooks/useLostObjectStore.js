import Swal from "sweetalert2";
import { lostAndFoundApi } from "../API"
import { useDispatch, useSelector } from "react-redux";
import { onCancelScaan, onScaanLostQr, onScaanRetrieveQr, onRetrievedObject } from "../store";

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
            const { data } = await lostAndFoundApi.get(`/qrs/lost-objects/QR/${qrValue}`);
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

    const startSendEmail = async( qrValue ) => {
        try {
            await lostAndFoundApi.put(`/qrs/lost-objects/report/${qrValue}`);
            Swal.fire({
                icon: 'success',
                title: 'Correo enviado',
                text: "El correo ha sido enviado correctamente.",
                confirmButtonText: 'Aceptar'
            });
            dispatch( onCancelScaan() );
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al enviar el correo',
                text: "No se pudo enviar el correo. Por favor, inténtelo de nuevo más tarde.",
                confirmButtonText: 'Aceptar'
            });
        }
    }

    const startDeliverObject = async( qrValue, isOwnerRetrieved ) => {
        try {
            await lostAndFoundApi.put(`/qrs/lost-objects/${qrValue}`);
            if ( isOwnerRetrieved ) {
                Swal.fire({
                    icon: 'success',
                    title: 'Objeto entregado',
                    text: "El objeto ha sido entregado correctamente.",
                    confirmButtonText: 'Aceptar'
                });
                dispatch( onCancelScaan() );
            } else {
                dispatch( onRetrievedObject() );
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error al entregar el objeto',
                text: "No se pudo entregar el objeto. Por favor, inténtelo de nuevo más tarde.",
                confirmButtonText: 'Aceptar'
            });
        }
    }

    const startCancelScaan = () => {
        dispatch( onCancelScaan() );
    }

    return {

        lostObjects,
        isObjectLost,
        error,

        getQrs,
        startRegister,
        startScaanQr,
        startSendEmail,
        startCancelScaan,
        startDeliverObject,

    }

}