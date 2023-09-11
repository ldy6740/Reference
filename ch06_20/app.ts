//튜플 -> 배열의 확장 기능, 배열의 원소 수를 제약할 수 있는 스팩

const address: [number, string, string] =  [1234, '사용자', '비밀번호'];



let [zipcode, address1] = address;

zipcode = "1234" // 구조분해할당 시에도 타입 체크 가능

type BookInfo = [string, string, number];

const BookData: BookInfo[] = [
	['헨리 8세', '세익스피어', 1234],
	['헨리 8세', '세익스피어', 1234]
]

BookData.push([1, 'b', 1234]) // 위 같은 경우에도 타입체크 가능

