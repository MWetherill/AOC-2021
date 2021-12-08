// file input

const fs = require('fs')

try {
  var input = fs.readFileSync('4-input.txt', 'utf8')
} catch (err) {
  console.error(err)
}

// winning card variable

var card;

// final number called
var finalCalledNo;


////////////

function newFunc(input) {
  
  // split input

  var arr = input.split("\n\n");

  // remove split first item (bingo numbers) and remove from input

  var bingoNos = arr[0].split(",")
  arr.shift()

  for (var i = 0; i < bingoNos.length; i++) {
    bingoNos[i] = parseInt(bingoNos[i]);
  }



  // split the remaining input
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("\n")
    for (var j = 0; j < arr[i].length; j++) {
      arr[i][j] = arr[i][j].split(" ")
      arr[i][j] = arr[i][j].filter(function(e){ return e === 0 || e })
      for (var k = 0; k < arr[i][j].length; k++) {
        arr[i][j][k] = parseInt(arr[i][j][k])
      }
    }
  }

  // function to check if all array items in a single row are the same
  function allEqual(row) {
    return new Set(row).size == 1;
  }

  

  

  /////////////////

  // loop through the called bingo numbers
  for (var i = 0; i < bingoNos.length; i++) {

    // loop through cards
    for (var j = 0; j < arr.length; j++) {
      
      // loop through rows
      for (var k = 0; k < arr[j].length; k++) {
        
        // loop through numbers
        for (var l = 0; l < arr[j][k].length; l++) {

          
          // if number matches mark with an x
          if (arr[j][k][l] === bingoNos[i]) {
            arr[j][k][l] = "x";
          }

          // return the card if a row is complete
          if( allEqual(arr[j][k]) ) {
            card = arr[j]
            finalCalledNo = bingoNos[i];
            return card
          }

          // return the card if a column is complete
          if (
              arr[j][0][l] === "x" &&
              arr[j][1][l] === "x" &&
              arr[j][2][l] === "x" &&
              arr[j][3][l] === "x" &&
              arr[j][4][l] === "x"

            ) {
              card = arr[j]
              finalCalledNo = bingoNos[i];
              return card
            }
        } //numbers

        

      } //rows
    } // cards

    
  } //bingoNos

}

newFunc(input)

var cardTotal = 0;

for (var i = 0; i < card.length; i++) {
  for (var j = 0; j < card[i].length; j++) {
    if (card[i][j] !== "x") {
      cardTotal += card[i][j]
    }
  }
}

var finalTotal = cardTotal * finalCalledNo;

console.log(finalTotal)