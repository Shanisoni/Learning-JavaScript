// when  we want to insert an symbol as a key  in the object it is manadotry to use [ ] brackets 
const mysum1 = Symbol('shani')

const new1 = {
    [mysum1] : "shani",
    name : "shani",
    id : 33909,
    email : "shanisoni90@hkbdf",
}
 


console.log(new1[mysum1])

// ****************

//  To change the value of an individual object 

new1.email = "soniBuggu90@gmail.com"


console.log(new1.email)




