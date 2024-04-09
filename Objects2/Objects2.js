const Object1 = {}


Object1.id = 22154002 ;

Object1.Name = "shani -soni";

Object1.class = "classIV";

Object1.email = " shani-soni7084@gmail.com"

console.log(Object1)



//  *********** 

//  objects allows nest8ing 

const objects2 = {

    objects3 : {
        objects4 : {
            objects5 : {
                Name : "shani soni" ,

                class : 8 


            }
        }
    }

    }

    console.log(objects2.objects3.objects4.objects5.Name)
   



//   *************** Merging of two Objects *************


const obj1 =  {
    1: "shani" ,

    2:  "soni" ,

    3: " rashmika"
}


const obj2 =  {
    9: "shahhhhhhhhhni" ,

    6:  "songggggggi" ,

    4: " rashka"
}

//  This is the method 


// const Merg3 = Object.assign(obj1 , obj2) 

//  Either we use spread method 


const Merg3 = {...obj1, ...obj2}

console.log(Merg3)


//  We can acess all the keys or all the values of an object in one time 


console.log(Object.keys(Object1))

console.log(Object.values(Object1))


// Method to check weather the objecrt has an specific property or not 


console.log(Object1.hasOwnProperty("id"))
// it will give true if present false if not 




//  Destructuring , In this the key is renamed with another variable name 


const {email : mail } = Object1

// Now we have Destructured the key email as mail 


console.log(mail);

