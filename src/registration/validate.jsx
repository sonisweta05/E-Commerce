
export const  checkValidData =(email,password) => {

    // const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[a-zA-Z]).{5,}$/.test(password);
    
    // if(!isNameValid)return "Name is not valid";
    if(!isEmailValid)return "Email ID is not valid";
    if(!isPasswordValid)return "Password is not valid";
    
    return  null;
    }  