// const shani = ['one' , 'two' , 'thre' , 'four' , 'five' , 'six' , 'seven']

// const soni = ['o' , 'p' , 'y' , 'w ' , 'd' , 's']


// // console.log(shani)

// // console.log(soni)

// // shani.push(soni)
// // shani.concat(soni)

// // console.log(shani)


// //  Array me jb koi element push kiya jata h to vo use as a element leta h chahe vo khud ek array hi kyi na ho 


// // Now if we want all these in an array 


// const TotalArray = shani.concat(soni)

// // console.log(TotalArray)



// // Spread oprator 

// // combinig the  arrays  reemember use three dots before variablename 

// const TotalArray2 = [...shani  , ...soni]



// console.log(TotalArray2)


// // One more method


const arr1 = [3,4,5,[5,6,[7,8,[9,10,11,[12,14]]]]]
const flattedArr = arr1.flat();
const flattedArr1 = arr1.flat(1);
const flattedArr2 = arr1.flat(2);
const flattedArr3 = arr1.flat(3);
const flattedArr4 = arr1.flat(4);
const flattedArrInfinity = arr1.flat(Infinity);
console.log(arr1)
console.log(flattedArr)
console.log(flattedArr1)
console.log(flattedArr2)
console.log(flattedArr3)
console.log(flattedArr4)
console.log(flattedArrInfinity)



// // ******************

// //  isArray is a method given element is array or not 
// console.log(Array.isArray('Hitesh'))


// console.log(Array.isArray['Hitesh'])

// console.log(Array.from('Hitesh'))  



// //  If we have more than two variable to add as an array than we use of() method 

// let var1 = 90

// let var2 = 89

// let var3 = 67

// const newVar = Array.of(var1 , var2 , var3)


// console.log(newVar)