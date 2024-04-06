function myname(){
console.log("S");
console.log("A");
console.log("I");
console.log("F");
console.log("U");
console.log("L");
console.log("L");
console.log("A");
console.log("H");

}

// myname()

// function addnumber(number1 , number2){
//     console.log(number1 + number2);
// }

// addnumber(3,4)
// addnumber(4,"3")
// addnumber(3,"a")

function addnumber(number1 , number2){
    // let result=number1+number2
    // console.log("SAIFULLAH");
    // return result

    return number1+number2
}

const result = addnumber(4,4)

//console.log("Results:", result);

// function userlogin(username) {
//     if(username === undefined){
//         console.log("please enter your name");
//         return
//     }
//     return `${username} just logged in `
// }
// console.log(userlogin());


function userlogin(username="SAIFU") {
    if(!username){
        console.log("please enter your name");
        return
    }
    return `${username} just logged in `
}
console.log(userlogin());