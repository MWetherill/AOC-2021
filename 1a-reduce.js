const fs = require('fs')

try {
  var input = fs.readFileSync('1-input.txt', 'utf8')
} catch (err) {
  console.error(err)
}

var dataString = input.split("\n");

var data = []

for (var i = 0; i < dataString.length; i++) {
  data.push(parseInt(dataString[i]));
}


/////////////
var increased = data.reduce((total, depth, index, array) => {
  if (depth > array[index - 1]) {
    total.push(depth)
  }
  return total
}, []).length;



/////////

console.log(increased)
