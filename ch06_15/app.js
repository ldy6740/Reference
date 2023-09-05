function makeInfiniteEnergyGenerater() {
	let energy = 0;
	return function (booster = 0) {
		if(booster) {
			energy += booster;
		} else {
			energy++
		}

		return energy;
	}
}

//생성기 함수는 function 과 fName 사이에 * 입력한다
function* infiniteEnergyGenerater() {
	let energy = 1;

	while(true) {
		const booster = yield energy;
	
		if(booster) {
			energy += booster;
		} else {
			energy++
		}
	}

}

//일반 함수 실행
const energy = makeInfiniteEnergyGenerater();

for(let i = 0; i < 5; i++) {
	console.log(energy());
}

console.log(energy(5));

//생성기 함수 실행
const energyGenerater = infiniteEnergyGenerater();

for(let i = 0; i < 5; i++) {
	console.log(energyGenerater.next()); // {value: 1, done: false} // done은 생성기 함수 내에서 return 을 만나면 true 가 된다.
}

console.log(energyGenerater.next(5));