document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div');
  const result = document.querySelectorAll('#result');
  const displayCurrentPlayer = document.querySelectorAll('#current-player');
  let currentPlayer = 1;

  for (let i = 0, len = squares.length; i < len; i++) {

    (function(index) {
        // add onclick for each square in the grid
        squares[i].onclick = () => {
          // if the square below is taken , take the one on top of it
          if (squares[index + 7].classList.contains('taken')) {
            if (currentPlayer === 1) {
              squares[index].classList.add('taken');
              squares[index].classList.add('player-one');
              currentPlayer = 2;
              displayCurrentPlayer.innerHTML = currentPlayer;
            } else if (currentPlayer === 2) {
              squares[index].classList.add('taken');
              squares[index].classList.add('player-two');
              currentPlayer = 1;
              displayCurrentPlayer.innerHTML = currentPlayer;
            }
            //if the square has class taken, alert cant make move
          } else alert("Can't make that move!")
        }
    });

  };

  function checkBoard() {
    const winningArrays = [];

    for (let y = 0; y < winningArrays.length; y++) {
      const square1 = squares[winningArrays[y][0]];
      const square2 = squares[winningArrays[y][1]];
      const square3 = squares[winningArrays[y][2]];
      const square4 = squares[winningArrays[y][3]];

      // check to see if those winnings arrays are made up of just one player
      if (square1.classList.contains('player-one') &&
          square2.classList.contains('player-one') &&
          square3.classList.contains('player-one') &&
          square4.classList.contains('player-one')) {
            // if true display player one wins
            result.innerHTML = "Player one wins!"

          } else if  (square1.classList.contains('player-two') &&
                          square2.classList.contains('player-two') &&
                          square3.classList.contains('player-two') &&
                          square4.classList.contains('player-two')) {
                            result.innerHTML = "Player two wins!"
                          }
    }
  }
});

// add an event listener to each square that will trigger the checkboard function on each click