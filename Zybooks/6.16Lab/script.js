function isStrongPassword(pwd){
    //if password has length less than 8, returning false
    if(pwd.length<8){
        return false;
    }
    //if password contains "password", returning false
    //if password contains "password", indexOf method returns a value other than -1
    if(pwd.indexOf("password") != -1){
        return false;
    }
    //defining a flag variable to indicate whether we found an upper case char or not
    var upper_char_found=false; //not found, initially
    //looping through the password
    for(var i=0;i<pwd.length;i++){
        //finding unicode value of char at index i
        var code=pwd.charCodeAt(i);
        //checking if value is between 65 and 90
        if(code>=65 && code<=90){
            //found.
            upper_char_found=true;
            //exiting loop
            break;
        }
    }
    //returning true if upper_char_found is true, else false
    return upper_char_found;
}

//testing the method
console.log(isStrongPassword("Qwerty"));
console.log(isStrongPassword("passwordQwerty"));
console.log(isStrongPassword("qwerty123"));
console.log(isStrongPassword("Qwerty123"));
