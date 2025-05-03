import { useDispatch ,useSelector } from 'react-redux';
import { lostAndFoundApi } from '../API';
import { onChecking, onClearError, onLogout, onLogin } from '../store';

export const useAuthStore = () => {

    const { isAuthenticated, user, error } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    const startLogin = async( {email, password} ) => {
        dispatch( onChecking() );
        try {
            const { data } = await lostAndFoundApi.post('/login', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin( {email: data.email, name: data.name} ) );
        } catch (error) {
            dispatch( onLogout( 'Credenciales incorrectas' ) );
            setTimeout(() => {
                dispatch( onClearError() );
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        const tokenInitDate = localStorage.getItem('token-init-date');

        if (!token || !tokenInitDate) {
            return dispatch(onLogout());
        }

        const tokenLifetime = 3600000;
        const tokenExpirationTime = parseInt(tokenInitDate) + tokenLifetime;
        const currentTime = new Date().getTime();

        if (currentTime >= tokenExpirationTime) {
            return startLogout();
        }

        const timeUntilExpiration = tokenExpirationTime - currentTime;
        setTimeout(() => {
            startLogout();
        }, timeUntilExpiration);

        try {
            const { data } = await lostAndFoundApi.post('/login', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( onLogin( {email: data.email, name: data.name} ) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
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