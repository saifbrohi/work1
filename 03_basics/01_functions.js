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

function calcultor(val1,val2,...num1){

      return num1
}
console.log(calcultor(200,400,500,1000));

const user={
    username:"Saifullah",
    price:199
}

function handleuser(anyobject){
  console.log(`username is ${anyobject.username}`,`And price is ${anyobject.price}`);
  
}
// handleuser(user)

handleuser(
    {
        username:"SAIF",
        price:999
    }
)

const myarr=[200,300,400,600]

function myarray(newarr){
    return newarr[1]
}
// console.log(myarray(myarr));

console.log(myarray([,200,300,400,600]));