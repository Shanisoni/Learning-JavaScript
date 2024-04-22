class user {
    constructor ( email , password ) {
        this.email = email ;

        this.password = password ; 

    }
}

const hitesh = new user("hitesh.ai" , "123") 

console.log(hitesh.password);