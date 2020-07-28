import validateName from '../functions/validateName'
export default dataForm => {
    let resultValidateName =  validateName(dataForm.name);
    if(resultValidateName.error) {
        dataForm.messageName = resultValidateName.message;
        return false;
    }
    dataForm.messageName = '';
    return true;
}