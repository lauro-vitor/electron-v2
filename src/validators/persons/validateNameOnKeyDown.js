import validateName from '../functions/validateName';

export default dataForm  => {
    let {name} = dataForm;

    if(name !== '') {
        let resultFirstName = validateName(name);
        if(resultFirstName.error){
            dataForm.messageName = resultFirstName.message;
            return;
        }
        dataForm.messageName = '';
        return;
    }
  
}