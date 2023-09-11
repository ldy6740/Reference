type Box = {
	width: number;
	height: number;
	borderRadius: number;
	backgroundColor: string;
	borderWidth?: number;
	['className']?: string;
}

let box: Box = {
	width: 200,
	height: 200,
	borderRadius: 5, 
	backgroundColor: 'red'
}


function makeBox(
	width:number,
	height: number,
	borderRadius: number,
	backgroundColor: string
): Box {
	return {
		width,
		height,
		borderRadius,
		backgroundColor,
	}
}

makeBox(100, 100, 0, 'bule');

class Shape implements Box {
	width: number;
	height: number; 
	borderRadius: number;
	backgroundColor: string;

	constructor(
		width: number,
		height: number,
		borderRadius: number,
		backgroundColor: string
	) {
		this.width = width;
		this.height = height;
		this.borderRadius = borderRadius;
		this.backgroundColor = backgroundColor;
	}
}

const bosShape = new Shape(10, 10, 0, 'bule');

// 객체는 참조 타입 그래서 변수에 담아도 주소값이 들어가기 때문에 같은 공간을 가르키게 된다.
const box1 = box; // box1 도 box 를 가르킨다
const box2 = Object.assign({}, box); // Object.assign 연산자를 이용하여 객체를 복사하여 새로운 객체를 만들수 있다.
const box3 = {...box, color: 'bolu'}; // 전개연산자를 이용하여 복사 후 추가하고 싶은 내용이 있으면 추가하여 새롭게 만들어 준다.
const box4 = JSON.parse(JSON.stringify(box)); //객체를 문자열로 바꾼후 다시 객채로 바꾸어 새로운 객채를 만든다. 