const fs = require('fs')

try {
  var input = fs.readFileSync('3-input.txt', 'utf8')
} catch (err) {
  console.error(err)
}

var data = input.split("\n");

for (var i = 0; i < data.length; i++) {
  data[i] = data[i].split("")
}


/////////////


function newFunc(arr) {

  var total = arr.length
  var totalOne = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  var totalZero = []
  var gammaArr = []
  var epsilonArr = []
  var gamma
  var epsilon

  // count 1's in each position
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++)
    totalOne[j] += parseInt(arr[i][j])
  }

  // count 0's
  for (var i = 0; i < totalOne.length; i++) {
    totalZero[i] = total - totalOne[i];
  }
  
  // compare 1's and 0's
  for (var i = 0; i < totalOne.length; i++) {
    if (totalOne[i] > totalZero[i]) {
      gammaArr[i] = 1
      epsilonArr[i] = 0
    } else {
      gammaArr[i] = 0
      epsilonArr[i] = 1
    }
  }

  gamma = gammaArr.join("")
  gamma = parseInt(gamma, 2);
  epsilon = epsilonArr.join("")
  epsilon = parseInt(epsilon, 2)

  return gamma * epsilon

}

/////////

console.log(newFunc(data))