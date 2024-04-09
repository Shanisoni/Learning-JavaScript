//  this function gives the current context 

const shani = {
    Name : "Shani" ,

    Id : 890908,

    Address : "Jalalpur Ambedkar Nagar",


    Welcomemessge : function() {
        console.log( `${this.Name} , welcome to the deep green world`);
    }
}
  console.log(shani.Welcomemessge())


//  now we are going to change the value of Name variable

shani.Welcomemessge()

shani.Name = "sam";

shani.Welcomemessge()

//  now the value of Name has been changed 

// this function does not works outer the block scope 

function shane() {
    let shnmi = "shanibhai"
    console.log(this.shnmi)
}

shane()



// ****************** Arrow Function************

//  Basic Arrow Function

const object7 = (num1 , num2) =>  {
    return num1 + num2;
}

console.log(object7(9, 8 ))

// Implicit Function

//  If we use curly brackets then it is mandatory to give a return type 
//  But if we use a round brackets then we dont have to give the return type 

const object8 = (num1 , num2) =>  (num1 + num2)
  
console.log(object8(19, 8 ))


