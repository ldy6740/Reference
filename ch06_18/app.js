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
