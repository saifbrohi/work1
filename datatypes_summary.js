//// primative datatype

 // 7 types of datatypes  string, Number, Boolean, Null, undefined, Symbol, BigInt //

 
  const score = 30
  const ScoreValue = 100.3

  const isLoggedIn = false
  const outSideTemp = null

 let userEmail;

 const id= Symbol('123')
 const anotherId = Symbol('123')

 console.log(id ===  anotherId);

const bigNumber= 823874234782333223n    /// its a big number when we check in using typpe of the checking//


 /// Referance (non primitive)
 
 // Array , Objects, Functions


 const heros= ["spiderman", "Batman","Tony shark"]

 let myobj= 
 {
     name:"Saif",
     age: 22,
 }

 const myFuncion = function(){
    console.log("hello world");
 }

 console.log(typeof bigNumber );  ////show the typeof bigint when our data numbers a large we use bigint

 console.log(typeof isLoggedIn);   /// isLoggedIn is only return true and false user login in or not

 console.log(typeof ScoreValue) ;  //// return the number from the data 

 console.log(typeof id);             //// its return the symbol icon

 console.log(typeof outSideTemp);    /// its returnn the object from outSideTemp using 

 console.log(typeof userEmail);      /// its return underfined because we dont declure him 

 console.log(typeof null);         /// null return empty not 0 always remember 