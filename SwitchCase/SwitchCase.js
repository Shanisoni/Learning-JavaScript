
const  month = 4 ;


switch(month) {
    case 1 : 
    console.log("Janauray")
    break;

    case 2:
    console.log("Feburary")
    break ;

    case 3 :
        console.log("March")
        break;

    case 4 : 
    console.log("April")
    break;

    default :
    console.log("default")


}


// Falsy Values 


// false    , 0 , -0 , BigInt 0n , "" , null , undefined , NaN 


// Truthy Value 


//  Anything in the string is truthy value 

// " 0 " , 'false' , "-0" ,  " "  , [ ] , { } , function() {}


const object1 = {

    SHANI : " SONI"
 }

if(Object.keys(object1).length === 0){
    console.log( "Object is empty" )
}else{
    console.log("object is not empty ")
}


// *********** Object Nullish Coalescing  Operator (??)


//  This operator works only for null and undefined , if there is nll or undefined and a number valu then it will give number value 


// let shani = null ?? 10 

// let shani = undefined ?? 11 

let shani = null ?? 60  





console.log(shani)


const soni = 90 

if (soni === 90 ){
    console.log("True")
}else {
    console.log("false ")
}


// Ternary Operator 