const clock = document.getElementById('clock')


// We have an object new Date() that directly provides the  current date 

// let date = new Date()

// To print this date we in erfrence to time we use toLocalTimeString mehod 

// console.log(date.toLocaleTimeString)

// SetInterval Method is used to control the Javascript events  on the basis of user defined time 
// It tells give me a method and a interval i will change the event based in that timing  

setInterval(function() { 
    let date = new Date()

    // console.log(date.toLocaleTimeString())

    clock.innerHTML = date.toLocaleTimeString();

} , 1000)