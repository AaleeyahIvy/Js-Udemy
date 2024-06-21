// You want to set the fullname as the first and last name
// You also need to set the first and last names based on the fullname
class User {

    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }
    get fullName(){
        return `${this._firstName} ${this._lastName}`;
    }
    set firstName(fullName){
        names = this.fullName.split(" ");
        this._firstName = names[0];
    }
    set lastName(fullName){
        names = this.fullName.split(" ");
        this._lastName = names[1];
    }
    /*
    2: another way / simpler
    set fullName(){
        const [first, last] = this.fullName.split(" "); using array destruturing!
        this._firstName = first;
        this._lastName = last;
    }
    */
}


const newUser = new User('Aaleeyah', 'Ivy');
console.log(newUser.fullName)
console.log(newUser._firstName);
console.log(newUser._lastName);