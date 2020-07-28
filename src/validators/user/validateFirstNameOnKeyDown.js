import validateName from '../functions/validateName';

export default dataForm  => {
    
    if(dataForm.firstName !== '') {
        let resultFirstName = validateName(dataForm.firstName);
        if(resultFirstName.error){
            dataForm.messageFirstName = resultFirstName.message;
            return;
        }
        dataForm.messageFirstName = '';
        return;
    }
  
}