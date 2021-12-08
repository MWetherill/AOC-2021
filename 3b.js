const fs = require('fs')

try {
  var input = fs.readFileSync('3-input.txt', 'utf8')
} catch (err) {
  console.error(err)
}

var data = input.split("\n")




/////////////
function newFunc(arr) {

  // OXYGEN
  function oxyFunc(input) {
    // split input into an array of strings
    var output = input.slice();
   
    // extra loop param to account for when only 1 item left
    for (var i = 0; i < input[0].length && output.length > 1; i++) {

        //  count 1's and 0's
        var one = 0;
        var zero = 0;
        for (var e of output) {
            if (e[i] == "0") {
                zero += 1;
            } else {
                one += 1;
            }
        }

        // if  output begins with a 1 or oine and zero are equal
        if (one >= zero) {
            for (var j = output.length - 1; j >= 0; j--) {
                if (output[j][i] == 0) {
                    // remove any items from output that start with a 0
                    output.splice(j, 1);
                }
            }
        // if  output begins with a 0
        } else {
            for (var j = output.length - 1; j >= 0; j--) {
                if (output[j][i] == 1) {
                    // remove any items from output that start with a 1
                    output.splice(j, 1);
                }
            }
        }
    }

    // convert the remaining item to an integer
    return parseInt(output[0], 2);
  }

  // CO2
  function co2Func(input) {
    // split input into an array of strings
    var output = input.slice();

    // extra loop param to account for when only 1 item left
    for (var i = 0; i < input[0].length && output.length > 1; i++) {

        //  count 1's and 0's
        var one = 0;
        var zero = 0;
        for (var e of output) {
            if (e[i] == "0") {
                zero += 1;
            } else {
                one += 1;
            }
        }

        // if  output begins with a 1 or oine and zero are equal
        if (one < zero) {
          for (var j = output.length - 1; j >= 0; j--) {
            if (output[j][i] == 0) {
                // remove any items from output that start with a 0
                output.splice(j, 1);
            }
          }
        // if  output begins with a 0
        } else {
          for (var j = output.length - 1; j >= 0; j--) {
            if (output[j][i] == 1) {
                // remove any items from output that start with a 1
                output.splice(j, 1);
            }
          }
        }
    }

    // convert the remaining item to an integer
    return parseInt(output[0], 2);
  }

  // final return
  return oxyFunc(arr) * co2Func(arr)
}

////////

// console.log(newFunc(data));
console.log(newFunc(data))