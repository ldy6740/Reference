function main() {
	const BUBBLING_PHASE = false;
	const CAPTURIMG_PHASE = true;
	const PHASE_NAME = ['NONE', 'CAPTURING', 'TARGET', 'BUBBLING'];

	// function eventLogger({target, currentTarget, eventPhase}) {// 이벤트가 발생하게 되면 해당 이벤트 객체를 전달 받는다. 
	function eventLogger(e) {// 이벤트가 발생하게 되면 해당 이벤트 객체를 전달 받는다. 
		console.log(e);
		console.log(e.target);
		console.log(e.currentTarget);
		console.log(e.eventPhase);
		console.log(this);
		// console.log(currentTarget);
		// console.log(eventPhase);
		// console.log(`${target.dataset.name}, ${currentTarget.dataset.name}, ${PHASE_NAME[eventPhase]}`);
	}

	let divs = document.querySelectorAll('div');
	divs.forEach(div => div.addEventListener('click', eventLogger, BUBBLING_PHASE));
}

document.addEventListener('DOMContentLoaded', main);