import MakeObject from './make-object.js';

const movieData = `Title,Release,Ticketing Rate,Director
보헤미안 랩소디,2018.10.31,11.5%,브라이언 싱어
완변한 타인,2018.10.31,4.6%,이재규
동네사람들,2018.11.07,0.5%,임진순`;

const movieList = new MakeObject(movieData);

console.log(movieList.toAllObject());

// const rawData = movieData.split('\n');
// console.log(rawData);

// const rows = rawData
// 		.filter((row, index) => index > 0)
// 		.map((row => row.split(',')));

// console.log(rows);