function checkWinner(gameState) {
  // Define all possible winning combinations (rows, columns, diagonals)
  const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Main diagonal
    [2, 4, 6], // Anti-diagonal
  ];

  // Check if any winning combination is satisfied
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      gameState[a] && // Ensure the square is not empty
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      // Return the winning symbol (X or O)
      return { winner: gameState[a] };
    }
  }

  // Check for a draw (all squares filled with no winner)
  if (gameState.every((square) => square)) {
    return { winner: "Draw" };
  }

  // If no winner and game is not a draw, continue
  return { winner: null };
}

export default checkWinner;
