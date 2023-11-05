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


    var digits1 = Array.from(String(player1Number), Number);
    var digits2 = Array.from(String(player2Number), Number);
    
    var Toro = [];
    var vash = [];
    
    for (var i = 0; i < digits1.length; i++) {
      for (var j = 0; j < digits2.length; j++) {
        if (digits1[i] === digits2[j] && i === j) {
          Toro.push(digits1[i]);
        } else if (digits1[i] === digits2[j]) {
          vash.push(digits1[i]);
        }
      }
    }

    console.log("Toro:");
    console.log(Toro);
    
    console.log("vash:");
    console.log(vash);
  
  });
});
