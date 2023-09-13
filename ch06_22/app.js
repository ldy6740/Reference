function CartV1() {
	this.cart = [];
	this.currentId = 0;
}

CartV1.prototype.getNewId = function() {
	this.currentId++;
	return this.currentId;
}

CartV1.createItem = function(name, price) {
	return {
		name, price
	}
}


CartV1.prototype.addItem = function(item) {
	this.cart.push({
		...item,
		id : this.getNewId()
	})
}


CartV1.prototype.crearCart = function() {
	this.cart = [];
	this.currentId = 0;
}

const shoppingCartV1 = new CartV1();

shoppingCartV1.addItem(CartV1.createItem('수박', 10000));
shoppingCartV1.addItem(CartV1.createItem('멜론', 8000));
shoppingCartV1.addItem(CartV1.createItem('사과', 5000));

console.log(shoppingCartV1.cart);


class CartV2 {

	static createItem = (name, price) => {
		return {
			name, // name : name
			price // price : price
		}
	}

	cart;
	currentId;

	constructor() {
		this.cart = [];
		this.currentId = 0;
	}

	getNewId = () => {
		this.currentId++;
		return this.currentId;
	}

	addItem = (item) => {
		this.cart.push({
			...item,
			id : this.getNewId()
		})
	}

	crearCart = () => {
		this.cart = [];
		this.currentId = 0;
	}
}

const shoppingCartV2 = new CartV2();

shoppingCartV2.addItem(CartV2.addIrem('수박', 8000));
shoppingCartV2.addItem(CartV2.addIrem('멜론', 12000));
shoppingCartV2.addItem(CartV2.addIrem('사과', 3000));

console.log(shoppingCartV2.cart);