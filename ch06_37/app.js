// 배열 순회


// 명령형 프로그래밍
const arr = [];

for (const n of [1, 2, 3, 4]) {
	arr.push(n * 2);
}

console.log(arr);

// 힘수형 프로그래밍
// 순차적으로 로직을 작은 단위로 분리하게 되면 재활용이 쉬워진다.
const arr2 = [1, 2, 3, 4]
	.map(n => n * 3)
	.filter(n => n % 2 !== 0)
	.map(n => `<li>${n}</li>`);

console.log(arr2);