//// for of 

// [],[],[]
// {},{},{}


const myarr =[1,2,3,4,5]

for (const num of myarr) {
    //console.log(num);
}


const greetings = "hello world"

for (const greet of greetings) {
    //console.log(` Each char is  ${greet}`);
}


const map = new Map()
map.set('IN','INDIA'),
map.set('US','UNITED STATE OF AMERICA'),
map.set('FR',"FRANCE"),
map.set('IN','INDIA')


console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}


const myobj={
    game1:"spidarman",
    game2:"batman"
}

// for (const [key,value] of myobj) {
//     console.log(key,':-',value);
// }