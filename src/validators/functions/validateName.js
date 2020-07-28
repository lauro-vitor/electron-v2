
const validateName = name => {
    if(!name) {
        return response(true, 'Nome não existe!');
    }
    if(name.length < 3){
        return response(true, 'Nome deve possuir mais de 3 caracteres!');
    }
    return response(false, 'sucess!');
}

const response = (error, message) => ({
    error,
    message
});
export default validateName;