let validatePincode = (pincode) => {
    let pincodeRegex = RegExp("^[1-9]{1}[0-9]{5}");
    if (pincodeRegex.test(pincode))
        return "Valid Pincode!!";
    else throw "Invalid Pincode!!";
};

console.log("Is 400088 pincode Valid : ");
try {

    console.log(validatePincode("400088"));
}
catch (error) {
    console.error(error);
}

console.log("Is A400088 pincode Valid : ");
try {
    console.log(validatePincode("A400088"));
}
catch (error) {
    console.error(error);
}

