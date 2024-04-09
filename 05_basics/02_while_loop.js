let score = 1

while (score <=10) {
    //console.log(`The Value Number ${score}`);
    score = score + 1

    if (score == 5) {
        //console.log(`Detected the Value : ${score}`);
        continue
    }
}

let myArray = [`Spidear`,"batman","iron man"]
let arr = 0

while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


let balance = 1
do {
    console.log(`Value Is ${balance}`);
    balance++

    if (balance == 5) {
        console.log(`Detetcted the Balance Score : ${balance}`);
        continue
    }
} while (balance <= 10);

