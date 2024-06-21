/*
Getters and Setters exercise
Create a class UserProfile that encapsulates a user's profile information.
This class should have fields for username, email, and birthdate. 
Use getters and setters when creating these fields.
Use setters to validate that the username is a non-empty string, the email includes an '@' symbol, 
and the birthdate is a valid date string.
If the username is an empty string or not a string - throw an error with the message of 'Invalid username.'
If the email does not include a @ character - throw an error with the message of 'Invalid email.'
If the birthdate is not a valid date string (for example '1990-01-01') - throw an error with the message of 'Invalid birthdate.'
Make sure to also use the setters that you write (with the implemented validations) in the constructor function of the class, so it also validates the fields when 
the object is initially created from the class (i.e., when the constructor function is initially executed).
*/

class UserProfile {
    constructor(username, email, birthdate){
        this.setUsername(username);
        this.setEmail(email);
        this.setBirthdate(birthdate)
    }
    setUsername(name){
        if (typeof name !== 'string' || !name || name.includes(' ')) { // simpler way instead of 5 different checks
            throw new Error(`Invalid username`)
        }
        this._username = name;
    }
    setEmail(emailAddress){
        if(!emailAddress.includes('@')){
            console.log(emailAddress);
            throw new Error(`Invalid email`)
        }
        this._email = emailAddress;
    }
    setBirthdate(date){
        const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
        if(!dateFormat.test(date)){
            throw new Error(`Invalid birthdate`)
        } 
        this._birthdate = date;
    }
    /* 
    Be mindful to use ._variable to store properties in getters and setters, you'll cause infinite loops
    */
    get username(){
        return this._username; 
    }
    get email(){
        return this._email;
    }
    get birthdate(){
        return this._birthdate;
    }
    set username(name){
        this.setUsername(name);
    }
    set email(emailAddress){
        this.setEmail(emailAddress);
    }
    set birthdate(date){
        this.setBirthdate(date);
    }
}

/* Testing */
/*
const myProfile = new UserProfile('aaleeyahOne', 'samanthastar@gmail.com', '2002-11-16')
console.log(myProfile.username);
console.log(myProfile.birthdate);
console.log(myProfile.email);
*/