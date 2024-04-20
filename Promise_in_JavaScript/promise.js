// const promises = new Promise( function( resolve , reject) {

//     setTimeout( function() {
//         console.log("The task is completed") 

//         resolve()

//     } , 1000)
// })

// promises.then( function() {
//     console.log( " The task is completed ")
// })



// // Another method 

// new Promise( function( resolve , reject) {

//     setTimeout( function() {
//         console.log("The task is completed") 

//         resolve()

//     } , 1000)

// }).then( function() {
//     console.log( "completed ")
// })



// const  newPromise  = new Promise(function(resolve, reject) {

//     setTimeout(function () {
//         let error = true;
//         if(!error) {
//             resolve({userName : "javascript" , password : "123" })
//         } else {
//             reject( ' Error : somthing went wrong')
//         }
//     } , 1000 ) 
    
// })


// async function consumePromiseFive(){
  

//     try {

//         const response = await newPromise

//         console.log(response) ; 
        
//     } catch (error) {
//         console.log(error)
        
//     }
// } 


// consumePromiseFive()












//  asyn function gives responce 

// async function getallUsers () {
     
// try {

//         // fetch is used to fetch the data from the network since it is network requst so await is applied  
//         const response1 = await fetch("https://jsonplaceholder.typicode.com/users") ;
//         // Now the data coming from the network is in string format we need to covert it in json format 
    
//         const data = await response1.json()
    
//         console.log(data)
        
    
// } catch (error) {

//     console.log("E :" , error );
    
// }


// };

// getallUsers()


// Now performing same task with the use of then() method 

fetch("https://jsonplaceholder.typicode.com/users")

.then(  (response) => {

    return response.json()    

})

.then( (data) => {
    console.log(data);
})


.catch( (error) => console.log("error" , error))
