//your JS code here. If required.
const input = document.getElementById("ip");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
	let promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(input.value);
		}, 2000);
	});
	promise.then((res)=> {
		output.innerText = `Result: ${res}`;
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(res * 2);
			}, 2000);
		})
	})
	.then((res1) => {
		output.innerText = `Result: ${res1}`;
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(res1 - 3);
			}, 1000);
		});
	})
	.then((res2) => {
		output.innerText = `Result: ${res2}`;
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(res2 / 2);
			}, 1000);
		});
	})
	.then((res3) => {
		output.innerText = `Result: ${res3}`;
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve(res3 + 10);
			}, 1000);
		});
	})
	.then((res4) => {
		output.innerText = `Final Result: ${res4}`;
	})
});