export const setupBoard = numDisks => {
  return [
    [...Array(numDisks).keys()].map(x => ++x),
    [],
    []
  ]
}

export const moveDisk = (board, from, to) => {
  const result = board.map(tower => [...tower]);
  if (isValidMove(result, from, to)) {
    result[to].unshift(result[from].shift());
  }
  return result;
}

const isValidMove = (board, from, to) => {
  return from !== to 
    && board[from]
    && (board[to].length === 0 || board[from][0] < board[to][0]);
}

export const gameWon = (board, numDisks) => {
  return board[0].length === 0
    && (board[1].length === numDisks || board[2].length === numDisks);
}
