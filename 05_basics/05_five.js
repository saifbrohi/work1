const coding = ["java","node js","php","ruby"] 

// coding.forEach( function ( val ){
//    // console.log(val);
// })


coding.forEach( (val) => {
    //console.log(val);
})

function printme(item) {
    //console.log(item);
    
}
coding.forEach(printme)

coding.forEach( ( item,index,arr) =>{
    //console.log(item,index,arr);
})

const mycoding =[
    {
        langname:"java",
        langcourese:"programmming"
    },
    {
        langname:"php",
        langcourese:"programmming"
    },
    {
        langname:"cpp",
        langcourese:"programmming"
    },
]

 mycoding.forEach( ( item)=>{
    console.log(item.langname);
    console.log(item.langcourese);
 }
)
