//your JS code here. If required.
const output = document.getElementById("output");

// Add loading row
output.innerHTML = `
  <tr id="loading">
    <td colspan="2">Loading...</td>
  </tr>
`;

const startTime = performance.now();

function createRandomPromise(index) {
  const delay = Math.random() * 2000 + 1000;
  return new Promise(resolve => {
    setTimeout(() => {
      const timeTaken = (performance.now() - startTime) / 1000;
      resolve({ name: `Promise ${index}`, time: parseFloat(timeTaken.toFixed(3)) });
    }, delay);
  });
}

const promises = [1, 2, 3].map(i => createRandomPromise(i));

Promise.all(promises).then(results => {
  output.innerHTML = ""; // Remove loading row

  results.forEach(result => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${result.name}</td>
      <td>${result.time}</td>
    `;
    output.appendChild(row);
  });
	const maxTime = Math.max(...results.map(r=>r.time)).toFixed(3);
	const totalRow = document.createElement("tr");
  totalRow.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>${maxTime}</strong></td>
  `;
  output.appendChild(totalRow);
})