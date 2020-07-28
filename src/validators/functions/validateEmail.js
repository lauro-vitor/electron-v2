import validator from 'validator';

const validateEmail = email => {
    if(! email) {
        return response(true, 'Email não existe!');
    }
    if(!validator.isEmail(email)){
        return response(true, 'email inválido!');
    }
    return response(false, 'success!');
}
const response = (error, message) => ({
    error,
    message
});

export default validateEmail;