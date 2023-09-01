document.getElementById("playerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const player1Name = document.getElementById("player1Name").value;
    const player1Number = document.getElementById("player1Number").value;

    const player2Name = document.getElementById("player2Name").value;
    const player2Number = document.getElementById("player2Number").value;

    // You can store or process the collected player information here
    // For example, you can pass the information to the game page as query parameters
    const queryParams = `?player1Name=${encodeURIComponent(player1Name)}&player2Name=${encodeURIComponent(player2Name)}`;

    // Redirect to the game page along with the player information
    window.location.href = `game.html${queryParams}`;
});