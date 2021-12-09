const fs = require('fs')

try {
  var input = fs.readFileSync('6-text.txt', 'utf8')
} catch (err) {
  console.error(err)
}

input = input.split(",");
for (var i = 0; i < input.length; i++) {
  input[i] = parseInt(input[i]);
}

///////
var count = 0

function loopFish(arr) {

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr[i] = 6;
      arr.push(8)
    } else if (arr[i] === 8) {
      arr[i] = 9;
    } else if (arr[i] === 9) {
      arr[i] -= 2;
    } else {
      arr[i] -= 1;
    }
  }

  return arr

}

for (var i = 0; i < 80; i++) {
  loopFish(input);
}

console.log(input.length)