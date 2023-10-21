class HeaderListData {
	constructor(source, separator = ',') {
		const rawData = source.split('\n');
		/**
		 * [Title,Release,Ticketing Rate,Director]
		 * [보헤미안 랩소디,2018.10.31,11.5%,브라이언 싱어]
		 * [완벽한 타인,2018.10.31,4.6%,이재규]
		 * [동네사람들,2018.11.07,0.5%,임진순]
		 */

		this.headers = rawData[0].split(separator); 
		// [Title,Release,Ticketing Rate,Director]
		this.rows = rawData 
						.filter((row, index) => index > 0)
						.map((row => row.split(separator)));
		/**
		 * [
		 * 	[보헤미안 랩소디,2018.10.31,11.5%,브라이언 싱어], 
		 * 	[완벽한 타인,2018.10.31,4.6%,이재규], 
		 * 	[동네사람들,2018.11.07,0.5%,임진순]
		 * ] 
		 */ 

	}

	row = index => this.rows[index]
			.map((row, index) => [this.headers[index], row]);
	
	get length() {
		return this.rows.length;
	}

	get columnLength() {
		return this.headers.length;
	}
}

export default class MakeObject extends HeaderListData {
	toObject = index => 
		this.row(index)
		.reduce((a, [key, value]) => ({...a, [key]: value}), {});
	

	toAllObject = () =>
		Array(this.length)
			.fill(0)
			.map((item, index) => this.toObject(index));
}