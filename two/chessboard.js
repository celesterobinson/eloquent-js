const chessBoard = (size, whiteSpaceSymbol = '#', blackSpaceSymbol = ' ') => {
  if (typeof size !== 'number') {
    throw new Error('Enter a number, you buffoon.');
  } else if (size <= 1) {
    throw new Error('Please enter a number above 0. How can I make a chessboard out of nothing?');
  }
  let chessBoardResult = '';
  for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
      if (j === 1) {
        chessBoardResult += '|';
      }
      if (i % 2 === 0) {
        j % 2 === 0 ?
        chessBoardResult += whiteSpaceSymbol :
        chessBoardResult += blackSpaceSymbol;
      } else {
        j % 2 === 0 ?
        chessBoardResult += blackSpaceSymbol :
        chessBoardResult += whiteSpaceSymbol;
      }
      if (j === size) {
        chessBoardResult += '|';
      }
    }
    chessBoardResult += '\n';
  }
  return chessBoardResult;
}
console.log(chessBoard(20, '$', '0'));
console.log(chessBoard(20));
