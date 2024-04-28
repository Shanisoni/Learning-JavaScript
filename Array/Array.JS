//        This is how to get the array element 

const myArray = [12 ,  0 ,1 , 2 , 4, 5, 6, 7]

console.log(myArray[5]);


// const Array2  =  new array1(1, 3, 5, 7, 8, 5)  

console.log(myArray[2]);



//  Arrayy Methods ******************

//  to access all the lements of array 
console.log(myArray);

//  How to push an element in the array 

myArray.push(9)

console.log(myArray)




//  To delete an element from the  array 

//  We do not give any argument in the pop it automatically delets an elements 


myArray.pop()

console.log(myArray)


//  unshift inserts an elemenst at the first index 

myArray.unshift(13)

console.log(myArray)



// includes  it is used To weather an element is present in the array or not 
// the output of this is in bollean

console.log(myArray.includes(9))


console.log(myArray.includes(5))



//  We can check the index of an element also 
//  if that element is not present then his index will be shown -1 



//  When we apply .join on an array it converts the array into string and removes the curly brackets 


const newArray = myArray.join()

console.log(newArray)


//  Slice Operation 


//  What this function do is it picks a range value like ( 1 , 5 ) then it will give 1 to 4 values 

// if we give 1,5 it will give total of five elements

const myn1 = myArray.slice(1,5)

console.log(myn1)


//  Use of splice 

//  splice includes the range also 

const myn2 = myArray.splice(1, 5)

console.log(myn2)

//  Use of splice 

//  splice includes the range also 

// const myn2 = myArray.splice(1, 5)

// console.log(myn2)

