export const setupBoard = numDisks => {
  return [
    [...Array(numDisks).keys()].map(x => ++x),
    [],
    []
  ]
}

export const moveDisk = (board, from, to) => {
  if (isValidMove(board, from, to)) {
    board[to].unshift(board[from].shift());
  }
  return board;
}

const isValidMove = (board, from, to) => {
  return from !== to 
    && board[from]
    && (board[to].length === 0 || board[from][0] < board[to][0]);
}
