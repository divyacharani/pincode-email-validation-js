let validatePincode = (pincode) => {
    let pincodeRegex = RegExp("^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$");
    if (pincodeRegex.test(pincode))
        return "Valid Pincode!!";
    else throw "Invalid Pincode!!";
};

let checkPincode = (pincode) => {
    console.log("Is " + pincode + " pincode Valid : ");
    try {

        console.log(validatePincode(pincode));
    }
    catch (error) {
        console.error(error);
    }
};

checkPincode("400088");         // Create a regex pattern to validate PIN code 400088 

checkPincode("A400088");        // Restrict the PIN code from taking alphabets or special characters at the beginning

checkPincode("400088B");        // Restrict the PIN code from taking alphabets or special characters at the End

checkPincode("400 088");        // Make sure 400 088 is also valid along with 400088

let validateEmail = (email) => {
    let EmailRegex = RegExp("^[\\w]+(?:[_+-\\.][\\w]+)*@(?=[a-z]+\\.)(?=[a-z]{2,})");
    if (EmailRegex.test(email))
        return "Valid Email!!";
    else throw "Invalid Email!!";
}
let checkEmail = (email) => {
    console.log("Is " + email + " email Valid : ");
    try {

        console.log(validateEmail(email));
    }
    catch (error) {
        console.error(error);
    }
}

// Make sure only following are valid special characters _,+, -,. proceeding to optional part
checkEmail("abc.xyz@bridgelabz.co");    // Valid
checkEmail("abc@bridgelabz.co");        // Valid
checkEmail("abc-100@yahoo.com");        // Valid
checkEmail("abc..2002@gmail.com");      // Invalid
checkEmail("abc@abc@gmail.com");        // Invalid