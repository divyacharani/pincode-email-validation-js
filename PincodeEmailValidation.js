let validatePincode = (pincode) => {
    let pincodeRegex = RegExp("^[1-9]{1}[0-9]{5}");
    if (pincodeRegex.test(pincode))
        return "Valid Pincode!!";
    else throw "Invalid Pincode!!";
};

try {
    console.log("Is 400088 pincode Valid : " + validatePincode("400088"));
}
catch (error) {
    console.error(error);
}