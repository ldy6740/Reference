const c1 = {
	name: 'c1',
	color: 'red',
}

const c2 = {
	name: 'c2',
	width: 300,
}

const c3 = {
	name: 'c3',
	height: 100,
}

c1.__proto__ = c3;  //모든 객체에는 __proto__ 메소드가 있다. (__proto__ => object) __proto__ 객채는 javascript 최상위 객체인 object 를 가르키고 있다.
c3.__proto__ = c2;

console.log(c1);
console.log(c2);
console.log(c3);

console.log(c1.width); // 300 출력, javascript에서 객체의 속성에 접근할때 현재 객체에 속석이 없으면 __proto__ 객체에서 속성을 찾는다
// c1에 없는 width 속성을 __proto__ 객체안에 c2에서 찾아 그 값을 반환한다.


// function object 

function Foo(name) {
	this.name = name
}

const f = new Foo('lim')

Foo.prototype.lastName = 'dong young'

// function Foo(name) {
// 	this.name = name;
// 	this.__proto__ = Foo.prototype; // (function)Foo 를 인스턴스 객체로 만들면 this.__proto__ = Foo.prototype 을 연결 시킨다.
// }

console.log(f.name)
console.log(f.lastName); //Prototype Chaining 메커니즘을 통해 Foo에서 lastName 을 찾고, 없으면 Foo 객체의 __proto__ 에서 lastName 을 찾는다.