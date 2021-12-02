const fs = require('fs')

try {
  var input = fs.readFileSync('2-input.txt', 'utf8')
} catch (err) {
  console.error(err)
}

var dataString = input.split("\n")

var data = []

for (var i = 0; i < dataString.length; i++) {
  data.push(dataString[i].split(" "))
  data[i][1] = parseInt(data[i][1])
}


/////////////



function depthInc(arr) {

  var horPos = 0;
  var depPos = 0;
  var aim = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === 'forward') {
      horPos += arr[i][1];
      depPos += (aim * arr[i][1])
    } else if (arr[i][0] === 'up') {
      aim -= arr[i][1]
    } else if (arr[i][0] === 'down') {
      aim += arr[i][1]
    }
  }

  return horPos * depPos

}

/////////

console.log(depthInc(data))