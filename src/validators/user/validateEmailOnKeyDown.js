import validateEmail from '../functions/validateEmail'

export default dataForm => {
    if(dataForm.email !== '') {
        let result = validateEmail(dataForm.email);
        if(result.error){
            dataForm.messageEmail = result.message;
            return ;
        }
        dataForm.messageEmail = '';
        return;
    }
}