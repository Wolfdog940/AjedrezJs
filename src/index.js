import Board from "./classes/boardClass/boardClass";
import Piece from "./classes/piece/pieceClass";
import Pawn from "./classes/piece/pieces/pawn";

const newBoard = new Board();
//const newPiece = new Piece();
const pawn = new Pawn('white','8',['A','B']);

newBoard.placeChessPieces(pawn.color,pawn.initialRow,pawn.initialColumnArray);

console.log('hola')
