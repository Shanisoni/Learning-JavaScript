// let  userOne = {

//     Name : "Shani",

//     Email: "shanisoni7084@gmail.com"

// }



//  So jb hm stack me kch store krte h or hm jb kisi variable ko us stack ka refrence dete h to variable kon bus ek copy milti h 

//    iska mtlb ye h ki agr variable  ki value baad me change ki jati h mtlb value kch or store ki jati h to or baad me variable ko acess krte h to last updtaed value show krta h iska mtlb stack ki value change nhi hoti h 





// let myYoutube = "shanisoni7084@gmail.com";

// let another = myYoutube;

//  another = "Software"

//  another = "Engineer"

// console.log(myYoutube);

// console.log(another)



//  *********** Heap **************

// In case of heap hm variable ko main heap ka hi refrence dete h iska mtlb if ki baad me variable ki value cjhange hoti h to main heap ki value k=bhi change ho jati h 

//  means copy na hojkr variable ko full acess hota h main heap ka 


let heap = {
    name: "shani" ,
    email: "soni",

    Id :  8707897 
}

let anotherHeap = heap;

// Twist , No changing the value of email of heap 

anotherHeap.email = " akgec.ac.in";

// anotherHeap = " hiteshchoudhary.com";

console.log(anotherHeap.email);

console.log(heap.email);

// console.log(heap);