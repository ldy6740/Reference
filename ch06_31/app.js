const p = new Promise((resolve, reject) => {
	resolve('OK');
	// reject('실패');
	setTimeout(() => {
		resolve('1, OK');
	}, 2000)
})

p.then(function(ok) {
	console.log(ok);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('2, OK');
		}, 3000);
	})
})
.then(function(ok2) {
	console.log(ok2);
})
.catch(function(error) {
	console.log(error);  // 실패
});



// fetch example
fetch('https://jsonplaceholder.typicode.com/posts')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data[1]);
	})
	.catch((error) => {
		console.log('error : ', error);
	})




function p3() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("jab1 ok");
		}, 2000);
	});
}

function p4() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('jab2 ok');
		}, 2000);
	})
}

p3()
	.then((data) => {
		console.log(data);
		return p4();
	})
	.then((data) => {
		console.log(data)
	})