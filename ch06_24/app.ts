const person = {
	name: 'dkfksjf',
	age: 40,
	getAge() {
		return this.age;
	}
}

person.age;
person.getAge();

const age = person.getAge;

age(); // javascript 실행하는 순간 소유자를 결정하는 실행켄텍스트 매커니즘으로 되어있다. 그래서 14라인에서 getAge를 싱핼 시키면 age의 값이 아닌 소유자를 찾을수 없기때문에  undefined가 나온다.
age.call(person); // 정상적으로 age값을 출력한다. 이렇게 교졍이 가능하다.

class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
		this.getAge = this.getAge.bind(this); // bind 메소드를 이용하여 컨텍스트를 현재의 this 로 고정 할 수 있다. 
	}

	getAge() {
		return this.age;
	}

	// lexical 컨텍스트 (어휘적 컨텍스트) // this 를 고정하는 방법
	getName = () => this.name; // 에로우 함수를 이용하면 한수를 만드는 그 순간 this 가 고정된다.  call, applay, bind 등을 이용하여 고정 할지 에로우 함수를 이용하여 고정할지는 상황에 맞게 결정.
	// 에로우 함수를 이용하여 this 를 고정하면 변형이 안된다. 
}

const p1 = new Person("dkdkdkd", 30);

p1.getAge();

const myAge = p1.getAge;

myAge(); // bind 메소드를 이용하여 컨텍스트를 고정했기 때문에 age값 정상 출력


 
