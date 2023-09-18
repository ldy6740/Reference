import { v4 as uuidv4 } from 'uuid';

type UniqObject = {
	id : string;
	[key: string]: string | number | boolean;
}

const makeObject = (): UniqObject => ({
	id: uuidv4()
})

console.log(makeObject());
console.log(makeObject());