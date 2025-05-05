export const sanitizeValidateEmail = ( email ) => {
    const sanitizedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ( !emailRegex.test( sanitizedEmail ) ) {
        throw new Error( 'El correo electronico no es valido' );
    }
    return sanitizedEmail;
}
export const sanitizeValidatePassword = ( password ) => {
    const sanitizedPassword = password.trim();
    const passwordRegex = /^[A-Za-z\d]{8,}$/;
    if ( !passwordRegex.test( sanitizedPassword ) ) {
        throw new Error( 'La contraseña no es valida' );
    }
    return sanitizedPassword;
}