import validateName from '../functions/validateName';
export default dataForm => {
    if(dataForm.lastName !== '') {
        let resultLastName = validateName(dataForm.lastName);
        if(resultLastName.error){
            dataForm.messageLastName = resultLastName.message;
            return;
        }
        dataForm.messageLastName = '';
        return;
    }
}
