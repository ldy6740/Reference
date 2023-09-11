class Circle {
	#radius;

	constructor(radius) {
		this.#radius = radius;
	}

	get radius() {
		return this.#radius
	}

	area = () => this.#radius * this.#radius * Math.PI;
}


class Rect {
	#width; // # 을 붙이면 ts의 private 속성 제어자와 동일한 기능이다.
	#height;

	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	get width() {
		return this.#width;
	}

	get height() {
		return this.#height;
	}

	area = () => this.#width * this.#height
}

