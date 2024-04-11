// Map is a object 

// Map takes only unique values 


const map = new Map()

map.set('key1', 'shani' )

map.set('key2' , 'soni')

map.set('key3' , "shyam" )

map.set('key4' , 'ramuji')

console.log(map);


for (const iterator of map) {

    // console.log(`${iterator} :-`);
    
}


// *********** for in Loop ************

// with the help of 'for in loop' we can access the elements of Objects also 

const verma = {
    key1 : "shani" ,

    key2 : "soni" ,

    key3 : "ranumandal"
}

for (const key in verma) {

    // console.log(verma[key])

    console.log( `ye h ${key} ${verma[key]} `)
}


// ********* For each method 


const mycoding = [
    {
        cey : "tom"        
    } ,

    {
        cey : "Bob"       
    },

    {
        cey : "root"

    },
    {
        ceyt : "tree"
    }
]

mycoding.forEach( (item) => {
    console.log(item.cey)


    
});