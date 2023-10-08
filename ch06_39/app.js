// 이터러블, 이터레이터 프로토콜 (반복이 가능하다.)

/**
 * 
 */

const myIterable = {};

myIterable[Symbol.iterator] = function* () { // 제네레이터 함수, 제네레이터 함수는 next, done, value가 반드시 필요하다.
	let i = 1;
	while(i <= 100) {
		yield i++;
	}
};

for (const n of myIterable) { //for of 가 iterator protocol를 준수하여 만들어진 문이다. 
	console.log(n);
}