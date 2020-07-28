import validateEmail from '../functions/validateEmail';
import validateName from '../functions/validateName';

export default formData => {
    let resultFirstName = validateName(formData.firstName);
    let resultLastName = validateName(formData.lastName);
    let resultEmail = validateEmail(formData.email);
    if(!resultFirstName.error && !resultLastName.error && !resultEmail.error) {
        formData.resultFirstName = '';
        formData.messageLastName = '';
        formData.messageEmail = '';
        return true;
    }
    if(resultFirstName.error) { 
        formData.messageFirstName = resultFirstName.message;
    }
    if(resultLastName.error) {
        formData.messageLastName = resultLastName.message;
    }
    if(resultEmail.error) {
        formData.messageEmail = resultEmail.message;
    }
    return false;
}