class user {
    constructor( username , email , password ) {
        this.username = username ; 

        this.email = email;

        this .password  = password
    }


    encryptPassword() {
        return `${this.password}abc`
    }
}

const chai = new user( "chai" , "chai@mail.com" , "123"  )


console.log(chai.encryptPassword());