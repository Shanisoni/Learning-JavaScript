
function user( username , loginCount , isLoginIn) {


    this.username = username;

    this.loginCount = loginCount;

    this.isLoginIn = isLoginIn ;

   return this;
}


const userone = new user("Shani Soni" , 12 , "Yes ");

const userTwo = new user("Soni" , 1988 , "No ");

console.log(userone);