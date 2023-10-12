const cartItems = [
  {id: 1, item: '사과', price: 40000, discount: 0},
  {id: 2, item: "포도", price: 3000, discount: 0},
  {id: 3, item: '귤', price: 4000, discount: 2},
  {id: 4, item: '배', price: 50000, discount: 1}
]




const newArr = [];

for(const item of cartItems) {

  const arr = [];

  for(const [, value] of Object.entries(item)){
    arr.push(value);
  }

  newArr.push(arr.join());
}

console.log('문 Style : ', newArr.join('==='));

const newArrTwo = obj => Object
  .entries(obj)
  .map(([, value]) => String(value));

const fnStyle = cartItems
  .map(newArrTwo)
  .join('===');

console.log('fnStyle : ', fnStyle);

