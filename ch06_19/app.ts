type Book = {
	title: string;
	copyright?: string;
	author?: string;
}

const books: string[] = [
	"책 제목 1",
	"책 제목 2",
	"책 제목 3",
	"책 제목 4",
	"책 제목 5"
]

// forEach
books.forEach((book: string, index: number, books: string[]) => {
	console.log(book, index);
});


// map 
const bookObject: Book[] = books.map(( book: string ) => {
	return {
		title : book,
		author : undefined
	}
})

console.log(bookObject);


const bookToObjectMake: Book[] = books
	.map((book: string) => ({
		title: book
	}))
	.map((book: Book) => ({
		...book,
		authoe: "test title"
	}))

console.log(bookToObjectMake);

const makeBookTitle = (book: string) => ({title: book});
const makeAuthor = (name: string) => {
	// closure 공간에 name 변수의 값을 저장 
	return function(book: Book) {
		return {
			...book,
			author: name // closure 에 저장된 name 의 값을 사용하여 객체를 만든다.
		}
	}
} // => const makeAuthor = (name: string) => (book: Book) => ({...book, author: name}) 

const bookToObjectMake2: Book[] = books
	.map(makeBookTitle)
	.map(makeAuthor('test title'));


console.log(bookToObjectMake2);

// filter, 입력으로 받은 함수가 반환한 값이 true 인 경우만 모아서 반환
const books2: string[] = [
	"헨리 3세",
	"안녕하세요",
	"헨리 8세",
	"빨리 빨리 하세요",
	"마지막 몰입"
]

const objectBookTitle: Book[] = books2
	.map((book: string) => ({title: book}))
	.map((book: Book) => ({
		...book,
		author: "test author"
	}) )

const henry: Book[] = objectBookTitle.filter((book: Book) =>
 book.title.includes('헨리')); // includes = 문자열 함수, 인자로 전달된 값이 포함되어있으면 true, 아니면 false

 console.log(henry);


 //reduce, reduce 함수는 두개의 인자를 받는다 첫번째 인자는 콜백 함수, 두번째 인자는 초기값 (누적 함수)
 // 콜백함수로 전달하는 함수도 항상 두개의 인자를 받는다. 

 const arrNumber: number[] = [10, 11, 50, 43, 20]

 const sumNumber: number = arrNumber.reduce((a: number, b: number) => a + b, 0); // 콜백함수의 첫번째 인자는 함수가 반환한 값이 들어간다(첫번째 실행시 초기값 삽입), 두번째 인자로는 배열의 값을 순차적으로 들어간다. 



type SomeObject = {
	[key: string] : string | number;
}

const arrObject: SomeObject[] = [
	{ border : 'none'},
	{ fontSize : 12},
	{ className : 'test'}
];

const someObject: SomeObject = arrObject.reduce((a: SomeObject, b: SomeObject) => ({...a, ...b}), {}); // 객체를 하나의 객체로 합치는 예제



//유사 배열 스펙

// 옛날 처리방식 (참고)
function sumNumbers(): number {
	return Array.from(arguments).reduce((a: number, b: number) => a + b, 0);
}

console.log(sumNumbers(10, 20, 30, 40, 50));


// 전개 연산자로 처리
function sumNumberToTypeScript(...args: number[]): number {
	return args.reduce((a: number, b: number) => a + b, 0);
}

console.log(sumNumberToTypeScript(10, 20, 30, 40, 50));