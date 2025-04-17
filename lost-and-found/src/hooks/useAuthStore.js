import { useDispatch ,useSelector } from 'react-redux';
import { lostAndFoundApi } from '../API';
import { onChecking, onClearError, onLogout, onLogin } from '../store';

export const useAuthStore = () => {

    const { isAuthenticated, user, error } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async( {email, password} ) => {
        dispatch( onChecking() );
        try {
            console.log(email, password);
            const { data } = await lostAndFoundApi.post('/login', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin( {email: data.email} ) );
        } catch (error) {
            dispatch( onLogout( 'Credenciales incorrectas' ) );
            setTimeout(() => {
                dispatch( onClearError() );
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = await localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );

        // try {
        //     const { data } = await lostAndFoundApi.get('/auth');
        //     localStorage.setItem('token', data.token);
        //     localStorage.setItem('token-init-date', new Date().getTime() );
        //     dispatch( onLogin( data.user ) );
        // } catch (error) {
        //     localStorage.clear();
        //     dispatch( onLogout() );
        // }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
    }

    return {
        error,
        isAuthenticated,
        user,

        startLogin,
        startLogout,
        checkAuthToken,
    }
}