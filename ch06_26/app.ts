type User = {
	id: number;
	name: string;
}

type Address = {
	zipcode: number;
	address: string;
}

function pipeOne(value: any): any {
	return value;
}

function pipeTwo<T>(value: T): T {
	return value;
}

let p1 = pipeOne(10); // 추론하여 typescript number type으로 any type 을 교체한다.
let p2 = pipeTwo('10'); // 제네릭 방식으로 타입을 명시적으로 지정하지 않으면 T에 넘겨준 인자의 타입으로 변환한다.
let p3 = pipeTwo(true); // 이렇게 쓸때는 any 타입과 다르지 않다. 


const pipeObjectOne = <T>(obj: T): T => {
	return obj;
}

let po1 = pipeObjectOne({id: 1, name: "김", zipcode: 5212});
// let po2 = pipeObjectOne<User>({id:2, name: '호', zipcode: 23392}); // 타입을 명시적으로 지정하면 해당 타입으로 typescript가 오류를 검사한다.

class State<S, Config={}> {
	private _state: S;
	config: Config;

	constructor(state: S, config: Config) {
		this._state = state;
		this.config = config;
	}

	getState(): S {
		return this._state;
	}
}

let s1 = new State<Address, {active : boolean}>(
		{zipcode: 22000, address: '서울시'}, 
		{active: true}
	);

const s1Data = s1.getState();

console.log(s1Data.zipcode, s1Data.address, s1.config.active);

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) { // 고급 테크닉 이다 찹고 
	return obj[key]; 
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(getProperty(x, 'a'));
// getProperty(x, 'm'); // m이 없어서 오류 

interface KeyPair<T, U> {
	key: T,
	value: U;
}

let kv1: KeyPair<number, string> = {key: 1, value: 'dkdkdk'};
let kv2: KeyPair<number, number> = {key: 1, value: 123123};