const mynum = [1,2,3]

// const total = mynum.reduce( function ( acc,currval){
//   console.log(`acc ${acc} And Currval : ${currval}`);
//   return acc + currval
// } , 0)

const total = mynum.reduce((acc,curr) => acc+curr ,0 )
console.log(total);


const shoppingcart = [
  {
    itemname:"js programming",
    price:199
  },

  {
    itemname:"ruby programming",
    price:599
  },
  {
    itemname:"cpp programming",
    price:1000
  },
  {
    itemname:"php programming",
    price:12999
  },
  {
    itemname:"node js programming",
    price:2999
  },
]

const pricetopay = shoppingcart.reduce((acc, item) => acc + item.price,0)
console.log(pricetopay);