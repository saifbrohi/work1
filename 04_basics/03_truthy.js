const userEmail = []

if (userEmail) {
    console.log("user login in ");
} 
else{
    console.log("user dont login in ");
}

// falsy values 

// 0 -0 bigint 0n "" null underfined nan

// truthy values 

// / "0" " " 'false' [] {} function (){} 

if (userEmail.length == 0) {
    console.log("Array is  Empty");
}

const emptyobj = 0

if (Object.keys(emptyobj).length===0) {
    console.log("Object is Empty ");
}

// nullish coalescing  operatot ??  null    underfined

let  val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 10

val1 = 10 ?? undefined ?? null

// console.log(val1);

//// tertinary operatot 

// condition true ? false


const iceprice = 100

iceprice <= 80 ? console.log("less then 80"):console.log("less than 90"); 