//your JS code here. If required.
function createRandomPromise(index){
	const delay = Math.random() * 2000 + 1000;
	return new Promise(resolve => {
		setTimeout(()=>{
			resolve({
				name: `Promise ${index}`,
				time: (delay/1000).toFixed(3);
			});
		}, delay);
	})
}

const startTime = performance.now();

const promise = [
	createRandomPromise(1),
	createRandomPromise(2),
	createRandomPromise(3)
];

Promise.all(promises).then(result =>{
	const output = document.getElementById('output');
	output.innerHTML = '';

	result.forEach(result =>{
		const row = document.createElement('tr');
		row.innerHTML = `<td>${result.name}</td><td>${resusl.time}</td>`;
		output.appendChild(row);
		
	});
	const totalTime = ((performance.now()- startTime)/1000).toFixed(3);
	const totalRow = document.createElement('tr');
	totalRow.innerHTML = `<td><strong>Total</strong></td><td><strong>${totalTime}</strong></td>`;
	output.appendChild(totalRow);
});