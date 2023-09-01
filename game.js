// Commented out the random number generation since it's not needed
// const targetNumber = generateRandomNumber();
let currentPlayer = 1; // Current player (1 or 2)
const player1Suggestions = [];
const player2Suggestions = [];

// ... (rest of the JavaScript code) ...

function checkGuess() {
    const playerGuess = document.getElementById("guessInput").value;
    if (playerGuess.length !== 4 || isNaN(playerGuess)) {
        document.getElementById("feedback").textContent = "Invalid guess. Please enter a 4-digit number.";
        return;
    }

    // Update the appropriate player's suggestions array
    if (currentPlayer === 1) {
        player1Suggestions.push(playerGuess);
        updateSuggestions("player1Suggestions");
    } else {
        player2Suggestions.push(playerGuess);
        updateSuggestions("player2Suggestions");
    }

    // Check if the game is won, or continue to the next turn
    const isGameWon = checkIfGameWon(playerGuess);
    if (isGameWon) {
        // Handle game won
    } else {
        // Toggle the current player for the next turn
        currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
}

function updateSuggestions(playerSuggestionsId) {
    const playerSuggestionsElement = document.getElementById(playerSuggestionsId);
    const currentPlayerSuggestions = currentPlayer === 1 ? player1Suggestions : player2Suggestions;

    let suggestionsHTML = "<strong>Player " + currentPlayer + ":</strong><br>";

    for (const suggestion of currentPlayerSuggestions) {
        suggestionsHTML += suggestion + "<br>";
    }

    playerSuggestionsElement.innerHTML = suggestionsHTML;
}

function checkIfGameWon(playerGuess) {
    // Implement the logic to check if the player's guess is correct and they have won the game
    // You can compare the player's guess with the other player's secret number
    // If the guess matches the number, return true; otherwise, return false
}

// ... (rest of the JavaScript code) ...