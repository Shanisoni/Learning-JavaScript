// There are mainly two types of data in JavaScript

// Primitive Data Types 

//It has 7 types 

// String , Boolean , Number , Null ( Remember Null means empty it dosent mean to zero )

//undefined(It means variable and memory is declared but wwhat type of data is stored is not specified)

//Symbol ( It is used to  make any segment unique)

//BigInt (It is used to handle big values )



//2 Non Primitive

// Array , Objects , Functions 

// const score = 100;
// const score = true;
// const score = "shani";

// const score = Null;
// console.log(typeof score);

let number ;
// Now he above code weill be considered as Undefined 


const id = Symbol('125');

const anotherid = Symbol('125');

console.log(id==anotherid);

const bigNumber = 9093843n
//  In the above code value is stored as bigint 

// **********  Non Primitive ***************
// Array , Objects , Function 
// Array
const heros = ["shani" , "soni" , "Ram" , " Sita "];

// Objects 

let myobj = {
    name: "shani Soni",

    age:34 ,
}

// Function 

const myfunction = function(){
    console.log("hello world")
}

const valueNull = null 
console.log(typeof valueNull);
// typeof of null is always object 

// and typeof of function is always a object function




// **************************************************





