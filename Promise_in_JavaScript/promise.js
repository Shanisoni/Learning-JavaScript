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



















const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.