function doubleTypeFunction(a: number | string) {
	if (typeof a === 'string') {
		return a.replace('x', 'X');
	}

	// return a.replace('Y', 'y');
}

doubleTypeFunction(10);



function foo(a?:number | null) {
	if(a === null) return; // 타입가드 코드

	console.log('display before');
	console.log(a?.valueOf()); // 여기서 a? 는 a가 null이면 undefined를 줘 라는 의미
	console.log('display after');
}

foo();

interface Foo {
	foo: string;
	common: string;
}

function isFoo(arg: any): arg is Foo {  // arg is Foo = 인자 arg 의 타입이 Foo 타입인지 체크, 전달된 인자의 타입이  Foo 타입정의와 일치하는지 체크
	return arg.foo !== undefined;
}

console.log(isFoo({foo: 'undefined', common: 'wow'}));