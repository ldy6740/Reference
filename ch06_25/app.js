function increment() {
	let saveNumber = 1;

	return function() {
		return saveNumber++; 
		// fn 안에서 fn 을 리턴할때 local에 있는 변수(saveNumber)를 closure 라는 공간에 현재 상태로 보관 하여 저장
	}
}

const inc = increment();

console.log(inc());  // saveNumber : 1
console.log(inc());  // saveNumber : 2
console.log(inc());  // saveNumber : 3
