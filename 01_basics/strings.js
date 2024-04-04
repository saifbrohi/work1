const name = "Saif"
const count = 50

console.log(`My Name Is ${name}`, `My Count Is ${count}`);

const gameName = new String ('Saif-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('f'));


const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-10, 1)
console.log(anotherString);

const newString1 = "   SAIFULLAH.    "

console.log(newString1);
console.log(newString1.trim());

const url = "https://github.com/saifbrohi/work1"
console.log(url.replace('%20','-'));
console.log(url.includes('saiffii'));