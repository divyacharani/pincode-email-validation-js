let validatePincode = (pincode) => {
    let pincodeRegex = RegExp("^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$");
    if (pincodeRegex.test(pincode))
        return "Valid Pincode!!";
    else throw "Invalid Pincode!!";
};

// Create a regex pattern to validate PIN code 400088 
console.log("Is 400088 pincode Valid : ");
try {

    console.log(validatePincode("400088"));
}
catch (error) {
    console.error(error);
}

// Restrict the PIN code from taking alphabets or special characters at the beginning
console.log("Is A400088 pincode Valid : ");
try {
    console.log(validatePincode("A400088"));
}
catch (error) {
    console.error(error);
}

// Restrict the PIN code from taking alphabets or special characters at the End
console.log("Is 400088B pincode Valid : ");
try {
    console.log(validatePincode("400088B"));
}
catch (error) {
    console.error(error);
}

// Make sure 400 088 is also valid along with 400088
console.log("Is 400 088 pincode Valid : ");
try {
    console.log(validatePincode("400 088"));
}
catch (error) {
    console.error(error);
}

