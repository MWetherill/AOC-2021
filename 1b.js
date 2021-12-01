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


function depthInc(arr) {

  
  var newArr = [];

  for (var i = 0; i < arr.length - 2; i++) {
    newArr.push(arr[i] + arr[i + 1] + arr[i + 2])
  }

  var num = 0;
  var count = 0;

  for (var i = 0; i < newArr.length; i++) {
    if (newArr[i] > num) {
      count++
    }
    num = newArr[i]
  }

  return count - 1

}

/////////

console.log(depthInc(data))