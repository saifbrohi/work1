const isUserLoggedIn = true
const temperature = 40

if (temperature === 40) {
    console.log("The Weather Is less than 50 : ");
}
else
{
    console.log("The Weather is Hot Today");
}

console.log("excuted the programe ");


const score = 200

if (score > 100) {
    let power = "fly "
    console.log(`user power ${power}`);
} 

console.log(`user power :${power}`);


const balance = 1000

// if (balance > 500) console.log("test 1"),console.log("test 2");  ///// wrong way of code because its not good

if (balance > 500) {
    console.log("balance less than 500");
} else if (balance < 750){
    console.log("balance is greater then 500");
} else if(balance < 800){
    console.log("balance is less then 800");
}

else{
    console.log("the balance is empty so recharge your account thankyou ");
}

const userLoggedIn = true
const debitcard = true
const personLoggedIn = true

if (userLoggedIn && debitcard && 2 ==3) {
    console.log("Allow User Select the both course");

    
}

if (debitcard || personLoggedIn){
    console.log("User Login In ");
  
} 



// < >  =< >= == != === !==