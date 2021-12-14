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
  var a = array[index] + array[index + 1] + array[index + 2]
  var b = array[index + 1] + array[index + 2] + array[index + 3]
  if (b > a) {
    total.push(depth)
  }
  return total
}, []).length;



/////////

console.log(increased)
