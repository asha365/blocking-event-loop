const list = Array(1e4)
  .fill()
  .map(x => Math.random());

let sum = 0;

function calculationFunction(a, b) {
  // lets say we need to do these calculations to get the result
  for (let i = 0; i < 100000; i++) {
    Math.sqrt(a * b);
  }
  sum += b;
  document.getElementById('sum').innerHTML = `Sum so far is ${sum}`;
}

function processList() {
  sum = 0;
  for (let i = 0; i < 999; i++) {
    setTimeout(() => {
      list.slice(i * 10, (i + 1) * 10).reduce(calculationFunction, 0);
    }, 0);
  }
}