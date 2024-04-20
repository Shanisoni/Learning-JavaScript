
function user( username , loginCount , isLoginIn) {


    this.username = username;

    this.loginCount = loginCount;

    this.isLoginIn = isLoginIn ;

   return this;
}


const userone = user("Shani Soni" , 12 , "Yes ");

console.log(userone);