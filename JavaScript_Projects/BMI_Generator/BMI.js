const form  = document.querySelector('form') ;
form.addEventListener('submit' , function(superMan){

        superMan.preventDefault()
        //  this method preventDefault prevents to take any default action 

        // document.querrySelector('  use . if that is      (id of the height)').value (to acess the value )
        // we use parseInt to convert the output data in integer value 

     const height =    parseInt(document.querySelector('#height').value)  
     const weight =    parseInt(document.querySelector('#height').value)  
     const result =    document.querySelector('#results').value

     if( height === '' || height < 0 || isNaN(height) ) {
        results.innerHTML = `Please give a valid height ${height}`
     }
     else if(weight === '' || height < 0 || isNaN(weight) ) {
        results.innerHTML = `Please give a valid height ${weight}`
     }
     else {
        const bmi = (weight / ((height * height )/10000)).toFixed(2)
        // here toFixed(2) is used to take only two values of the output 
        results.innerHTML = `<span>${bmi}</span>`;

     }

    


     
}) 