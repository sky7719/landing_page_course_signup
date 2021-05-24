function onSubmit(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phNumber = document.getElementById("phoneNumber");
    var city = document.getElementById("city");
    var regName = new RegExp("[^a-z$|^A-Z$]");
    var regNum = new RegExp("[^0-9$]");
    if(name.value == ""||name.value == " "){
        return displayErrorMessege(name,"nameError","Please enter name");
    }
    if(name.value.length<3 || name.value.length>20){
        return displayErrorMessege(name,"nameError","name should have atleast 3 to 20 characters.");
    }
    if(regName.test(name.value)||name.value.length<4 || name.value.length>20){
        return displayErrorMessege(name,"nameError","Special characters and digits are not allowed.");
    }
    if(email.value == ""||email.value == " "){
        return displayErrorMessege(email,"emailError","Please enter Email");    
    }
    if(!validateEmail(email.value)){
        return displayErrorMessege(email,"emailError","Please enter a valid email address."); 
    }
    if(phNumber.value == ""||phNumber.value == " "){
        return displayErrorMessege(phNumber,"numberError","Please enter your mobile number");
    }
    if(regNum.test(phNumber.value) || phNumber.value.length<10 || phNumber.value.length>10){
        return displayErrorMessege(phNumber,"numberError","Please enter a 10 digit valid phone number");
    }
    if(city.value == ""||city.value == " "){
        return displayErrorMessege(city,"cityError","Please enter your city");
    }
    if(regName.test(city.value)){
        return displayErrorMessege(city,"cityError","Special characters and digits are not allowed.");
    }
    else{
        return true;
    }
}
function displayErrorMessege(attribute,elementID,messege){
    var errorMessege = document.getElementById(elementID);
    
    errorMessege.innerHTML = messege;
    errorMessege.classList.add("emptyFieldError");
    attribute.focus();
    setTimeout(()=>{errorMessege.innerHTML = ""},2500);
    return false;
}
function validateEmail(email){
    var emailStrings = email.split('@');
    if(emailStrings.length!=2 || emailStrings[0] == "" || emailStrings[1] == ""){
        return false;
    }
    else{
        var domainName = emailStrings[1].split('.');
        if(domainName.length>1 && domainName.length<4){
            var i;
            for(i = 0;i<domainName.length;i++){
                if(domainName[i] == ""){
                    return false;
                }
                if(i>0 && (domainName[i].length<2 || domainName[i].length>3)){
                    return false;
                }
            }
            return true;
        }
        else{
            return false;
        }
    }
}