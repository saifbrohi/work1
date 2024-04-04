/// array ////

const myarr =[0,1,2,3,4,5]
// console.log(myarr);

const  heros=["spiderman","batman"]
// console.log(heros);

const myarr2 = new Array(0,1,2,4)
// console.log(myarr2[1]);


///// Array Method  //////

// myarr.push(7)
// myarr2.pop()

// console.log(myarr2);
//console.log(myarr);

//// Array Methods ....//////

//  console.log(myarr.includes(4));
//  console.log(myarr.indexOf(2));

 const newarr = myarr.join()

//  console.log(typeof newarr);

myarr.unshift(4)
myarr.shift(4);
// console.log(myarr);

////// Slice And Splice ///////

console.log("A ",myarr);
const mynan = myarr.slice(1,3)

console.log(mynan);


console.log("B ", myarr);

const mynan2 = myarr.slice(1,3)
console.log((mynan2));

const mynan3 = myarr.splice(1,3)
console.log("C ", myarr);
console.log(mynan3);
