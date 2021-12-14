function increment(input) { return input + 1;}

function decrement(input) { return input - 1; }

function double(input) { return input * 2; }

function halve(input) { return input / 2; }

let pipeline = [
  increment, 
  increment, 
  increment, 
  increment, 
  double, 
  decrement
];

const result = pipeline.reduce(function(total, func) {
  return func(total);
}, 12);

console.log(result) // 3