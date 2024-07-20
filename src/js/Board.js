/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
export default class Board {
  constructor() {
    this.boardSize = 3;
  }

  drawBoard() {
    const board = document.createElement('div');
    board.classList.add('board');
    for (let i = 0; i < this.boardSize ** 2; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      board.appendChild(cell);
    }
    this.board = board;
    return this.board;
  }

  getBoard() {
    this.drawBoard();
    return this.board;
  }
}
