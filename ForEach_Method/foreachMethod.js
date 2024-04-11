// forEach method does not returns any value 


// const coding = [ "1" , "3", "4" , "5","7", ]

// coding.forEach((item) => {

//     // console.log(item)
    
// });


// filter function helps to get the  return value of the array 
// const filterfunc = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// const newOne = filterfunc.filter( (num) => num > 5 )

// We can do this like this also 


//  If we are using curly brackets we then we have to give return type  
// const newOne = filterfunc.filter( (num) =>  {
//     num > 5
//     return num;
// })
     
// console.log(newOne);

// const array1 = [ 1 , 2 , 4 , 5  , 7 , 9 , 0]

// array.forEach( (num) => {
//     if( num > 2 ) {
//         // console.log(num)
//     }
// })

// ************ 
//  Chaining Method

//  In this method we can use filter() and map() both the methhods 

const array1 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

const a1 = array1.map( (num)  => {return  num + 10 })
           

            

console.log(a1)
