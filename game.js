document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    var form = document.getElementById('playerForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the values from the input fields
      var player1Number = document.getElementById('player1Number').value;
      var player2Number = document.getElementById('player2Number').value;
  
      // Reset the form
      form.reset();
  
      // Call the compareDigits function
      var commonDigits = compareDigits(player1Number, player2Number);
      var Toro = [];
      var vash = [];
  
      for (var i = 0; i < commonDigits.length; i++) {
        if (commonDigits[i].digit1 === commonDigits[i].digit2 && commonDigits[i].index1 === commonDigits[i].index2) {
          Toro.push(commonDigits[i].digit1);
        } else {
          vash.push(commonDigits[i].digit1);
          vash.push(commonDigits[i].digit2);
        }
      }
  
      console.log("Toro numbers: " + Toro);
      console.log("Vash numbers: " + vash);
    });
  
    function compareDigits(number1, number2) {
      // Convert the numbers to arrays of digits
      var digits1 = Array.from(String(number1), Number);
      var digits2 = Array.from(String(number2), Number);
  
      // Get the smaller length of the two arrays
      var length = Math.min(digits1.length, digits2.length);
  
      // Create an array to store the common digits
      var commonDigits = [];
  
      // Iterate over the arrays and find the common digits
      for (var i = 0; i < length; i++) {
        if (digits1[i] === digits2[i]) {
          commonDigits.push({
            digit1: digits1[i],
            digit2: digits2[i],
            index1: i,
            index2: i
          });
        }
      }
  
      return commonDigits;
    }
  });
  