for (let i = 0; i <= 10; i++) {
    const element = i
    if (element == 5) {
        // console.log(`5 Number Is Best`);
    }
}

for (let j = 0; j <= 10 ; j++) {
    
    // console.log(`Inner Loop ${j}`);

    for (let i = 0; i <=10; i++) {
    //   console.log(`Outer Loop ${i}`,`The Inner Loop Is ${j}`);
        
    }
}
 

for (let j = 1; j <= 10 ; j++) {
    
    // console.log(`OUTER Loop ${j}`);

    for (let i = 1; i <=10; i++) {
    // console.log(i + ` * ` + j + ` = ` + i*j);    
    }
}
for (let i = 1; i <= 20; i++) {
    
    if (i == 5) {
        // console.log(`Detected The Number `);
        break
    }
    //console.log(`${i}`);
}

for (let i = 1; i <= 20; i++) {
    
    if (i == 5) {
        console.log(`Detected the Number`);
       continue       
    }
  
    if (i == 7) {
        console.log(`delete the number `);
        break
    }
    console.log(` ${i}`);
}
