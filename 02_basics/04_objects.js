
const tinder = {}
    tinder.id = "123abc",
    tinder.name ="SAIFULLAH",
    tinder.isLoggedIn = false


    //console.log(tinder);

const regularuser = {
    email:"Saifullahbrohi65@gmail.com",

    fullname:{
        userfullname:{
            firstname:"SAIFULLAH",
            lastname:"BROHI"
        }
    }
}

//console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:  "a", 2: "b"}
const obj2 = {3:  "a",  4: "b"}

//const obj3 ={obj1,obj2}
//const obj3 = Object.assign({}, obj1,obj2,obj4)
 const obj3 ={...obj1, ...obj2}

 const user = [
    {
        id : 1,
        email: "Saifullahbrohi65@gmail.com"
    },
    {
        id : 1,
        email: "Saifullahbrohi65@gmail.com" 
    },
    {
        id : 1,
        email: "Saifullahbrohi65@gmail.com"
    }

]

user[1].email
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

console.log(tinder.hasOwnProperty('isLoggedIn'));

