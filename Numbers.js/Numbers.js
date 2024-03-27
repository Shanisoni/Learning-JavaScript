const number = 400;

console.log(number);

//  This method is goof 
console.log(new Number(number));



//  toString is a method which is used to convert a number into string 

console.log(number.toString());
//  Now it has been converted into string 

//  lets check it 

console.log(number.toString().length);








const number2 = 400.9879678;
// toFix method is used to get two consequent value after decimal for the variable value 

console.log(number2.toFixed(3));



// toPecision is a method wich gives output in string and gives fix amount of avlues defined by user 


console.log(number2.toPrecision(4));  // I hav defined for only 4 values of ther variable number2 



// toLocaleString is a method that is used to apply comma in the large values 

const number3 = 40000000;

console.log(number3.toLocaleString('en-IN'));   // en-IN is used to define for indian type