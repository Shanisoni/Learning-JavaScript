function object1(num1 ) {

    // let varuable = num1 + num2 ;
    return num1

    
    
}



console.log(object1(4 ));



//  Rest operator  is used by applying three dots ...
//  It is used to add all elements 

function object2( ...num1 ) {


    return num1

    
    
}


console.log(object2(200 , 400 , 500 , 600 , 900 ,100 ))


//  Object 



function obj3(anyobject) {
    console.log(`User name is ${anyobject.username} and his id is ${anyobject.userid}`)
}


obj3 ({

    username : "shani soni" ,

    userid : 997987987,

})


// Passing array through an function


const array = [200 , 300 , 400 , 500 , 600]

function giveArray( getarray) {
    return getarray[4]

}

console.log(giveArray(array))