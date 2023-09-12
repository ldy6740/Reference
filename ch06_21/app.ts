interface Container {
	tagName: string;
	className: string;
	children?: string[];
	getTagName: () => string;
	getClassName: () => string;
}

abstract class Shape {
	public static MIN_BORDER_WIDTH = 0;
	public static MAX_BORDER_WIDTH = 30;

	public readonly name: string = 'Shape';

	protected _borderWidth: number; // 외부 접근 X, 자식 요소에서 접근 O
	private action!: string; //외부 접근 X, 자식 요소에서 접근 X  오직 소속된 클래스 내부에서만 사용가능


	constructor(borderWidth: number = 0) {
		this._borderWidth = borderWidth;
	}

	abstract area: () => number; // abstract 추상을 의미, abstract 클래스에서만 사용 가능하다. 

	set borderWidth(width: number) {
		if(width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH) {
			this._borderWidth = width;
		}else {
			throw new Error('borderWidth 허용범위를 벗어난 동작을 시도했습니다.')
		}
	}

	get borderWidth() {
		return this._borderWidth;
	}
}


class Circle extends Shape {
	private _radius: number;
	public name: string = 'Circle';

	constructor(radius: number) {
		super();
		this._radius = radius;
	}

	get radius() {
		return this._radius;
	}

	area = () => this._radius * this._radius * Math.PI;
}

class Rect extends Shape {
	private _width: number;
	private _height: number;

	constructor(width: number, height: number) {
		super();

		this._width = width;
		this._height = height;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	area = () => this._width * this.height;
}


const circle = new Circle(50);
const rect = new Rect(100, 200);

console.log(circle.borderWidth);
console.log(rect.name);
console.log(rect.area);


try {
	circle.borderWidth = 300;
} catch(e) {
	console.error(e);
}

class Mycontainer implements Container { // interface를 사용할때는 public한 요소들만 사용이 가능하다.
	tagName: string;
	className: string;

	constructor(tagName: string, className: string) {
		this.tagName = tagName;
		this.className = className;
	}

	getTagName = () => this.tagName;
	getClassName = () => this.className;
}