const shani = ['one' , 'two' , 'thre' , 'four' , 'five' , 'six' , 'seven']

const soni = ['o' , 'p' , 'y' , 'w ' , 'd' , 's']


// console.log(shani)

// console.log(soni)

// shani.push(soni)
// shani.concat(soni)

// console.log(shani)


//  Array me jb koi element push kiya jata h to vo use as a element leta h chahe vo khud ek array hi kyi na ho 


// Now if we want all these in an array 


const TotalArray = shani.concat(soni)

// console.log(TotalArray)



// Spread oprator 

// combinig the  arrays  reemember use three dots before variablename 

const TotalArray2 = [...shani  , ...soni]

console.log(TotalArray2)


// One more method


const TotalArray3 = shani.flat(Infinity)

console.log(shani)




// ******************

//  isArray is a method given element is array or not 
console.log(Array.isArray('Hitesh'))


console.log(Array.isArray['Hitesh'])

console.log(Array.from('Hitesh'))  



//  If we have more than two variable to add as an array than we use of() method 

let var1 = 90

let var2 = 89

let var3 = 67

const newVar = Array.of(var1 , var2 , var3)


console.log(newVar)