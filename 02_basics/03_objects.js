//// objects literals /////

const mysym = Symbol("key1")
const user={
    name:"SAIFULLAH",
    "full name ":  "SAIFULLAH BROHI",
    age: 22,
    [mysym]: "mykey1",
    location: "Hyderabad",
    email: "Saifullahbrohi65@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}
console.log(user.email);
console.log(user["email"]);

console.log(user["full name "]);

console.log(user[mysym]);

user.email="SAIF65@GMAIL.COM"
// Object.freeze(user)

user.email="SAIFULLAH12@GMAIL.COM"
console.log(user);

user.greetingone = function(){
    console.log("hello js World");
}

user.greetingtwo = function(){
console.log(`Hello Js World, ${this.name}`);
}

user.greetingone3 = function(){
    console.log(`Saifullah Age Is,${this.age}`);
}

console.log(user.greetingone());
console.log(user.greetingtwo());
console.log(user.greetingone3());