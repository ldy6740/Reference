const userName = 'Lim dongyoung';
const bolder = text => `<b>${text}</b>`;

console.log(`Hi~ ${userName}`);
console.log(`Hi~ ${bolder(userName)}`);


//태그드 템플릿
function div(strings, ...fns) {
	const flat = s => s.split('\n').join('');

	return function (props) {
		return `<div style="${flat(strings[0]) + (fns[0] && fns[0](props)) + flat(strings[1])}"></div>`;
	}
}



const Div = div`
 font-size: 20px;
 color: ${props => props.active ? 'white' : 'gray' };
 border: none;
`;


console.log(Div({active : true}));