const mydate = new Date();

console.log(mydate);

// Conveting it into String

console.log(mydate.toString());

console.log(mydate.toISOString());

console.log(mydate.toJSON());

console.log(mydate.toLocaleDateString());

console.log(mydate.toLocaleString());

console.log(mydate.toLocaleTimeString());

console.log(mydate.toString());

// To know the type of date
console.log(typeof(mydate));


const mydate2 = new Date(2023,0,2);

console.log(mydate2.toDateString())

console.log(mydate2.toLocaleDateString())


console.log(Date.now());

console.log(Date.now()/1000); // in seconds 
// to get in seconds

console.log(Math.floor(Date.now()/1000));





let newDate = new Date()

console.log(newDate.getDate());

console.log(newDate.getDay());

console.log(newDate.getFullYear());

console.log(newDate.getHours());

console.log(newDate.getMilliseconds());

console.log(newDate.getMonth());

// console.log(newDate.get)


//  This is how we can print day ,  date  ,  month etc 

console.log(`Todays day is ${newDate.getDay()} and the month is ${newDate.getMonth()}`)