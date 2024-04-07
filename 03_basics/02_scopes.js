let a = 10
// const b = 20                 ///////  GLOBAL SCOPE CODE 
//var  c = 300


if (true) {
    let a = 10
    let oneplus = 78
    const b = 20                ////// LOCAL SCOPE 
    var c = 30
    //console.log("INNER LINE :",a)

   
}
//console.log(a);

function one(){
    const username="SAIFULLAH"

    function two(){
        const website = "Youtube"
        console.log(username);
    }

    //console.log(website);
    // two()
}
// one()

if (true) {
    const username = "SAIFULLAH"
    if(username === "SAIFULLAH"){
        const website=" YOUTUBE"
        // console.log(username+website);
    }

    // console.log(website);
   {
        
    }
}

//+++++++++++++++++++++++++ INTERESTING ==================

console.log(addone(5));  ///////////////////// first method of when u dont need any Varaible name 
function addone(num){
    return num+1
}

// console.log(addtow(5)); ///////////////  when u declure the functiion but give variable 
const addtow=function(num2){
    return num2+2
}

