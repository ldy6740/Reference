const books = []; 

// 배열 데이터 삽입 방법

// 원시적
books[0] = "배열 데이터 1";
books[1] = "배열 데이터 2";
books[2] = "배열 데이터 3";

// push 메소드 이용, push 배열의 마지막에 데이터 추가
books.push('push 이용 데이터 삽입1');
books.push('push 이용 데이터 삽입2');
books.push('push 이용 데이터 삽입2');


console.log(books);
console.log(books.length); // length 메소드는 배열의 데이터 총 수를 알려준다


// 데이터를 꺼내는 방법

// pop, pop 메소드는 배열의 마지막 데이터를 꺼낸다.
books.pop();
books.pop();
books.pop();


console.log(books);


// slice, slice 메소드는 위치값을 지정 하여 데이터를 꺼낸다. 이때 원본 데이터는 그대로 유지한다. 데이터를 복사하여 꺼내온다.
console.log(books.slice(1, 2)); // 두번째 인자로 받은 위치의 값에 -1 한 데이터까지 꺼낸다.
console.log(books.slice(0, 3));

// splice, splice 메소드는 위치값을 지정하여 데이터를 꺼내오기도 하고, 꺼내온 데이터 자리에 데이터 삽입도 가능하다. 원본데이터를 변경 시킨다.
console.log(books.splice(1, 2, '1', '2', '3'))  // 첫번째, 두번째 인자로 전달된 위치의 데이터를 빼오고 세번째 부터 전달된 인자는 빼온 위치에 삽입
console.log(books);

books.shift(); // 배열의 첫번째 위치의 데이터를 꺼내온다.
console.log(books);

books.unshift('배열의 첫번째 위치에 삽입 데이터'); // 배열의 첫번째 위치에 데이터 삽입
console.log(books);

const allBooks = books.join(); // 배열의 데이터를 하나의 문자열로 변환, 인자로 는 구분자를 전달 기본값은 , 이다.
console.log(allBooks);
const allBooks2 = books.join(''); 
console.log(allBooks2);
const allBooks3 = books.join('='); 
console.log(allBooks3);


const newBooks = allBooks.split(','); // split 의 인자로 전달된 구분자 기준으로 문자열을 배열 변환


const one = ['1', '2', '3'];
const two = ['하나', '둘', '셋'];

const mergeArr = one.concat(two); // concat 의 인자로 전달된 배열과 하나로 결합
console.log(mergeArr);

const mergeArrList = [...one, two]; // 전개 연산자를 이용 하여 배열 합치기
console.log(mergeArrList);