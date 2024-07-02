import Board from "./classes/boardClass/boardClass.mjs";
import Piece from "./classes/piece/pieceClass.mjs";
import Pawn from "./classes/piece/pieces/pawn.mjs";

const newBoard = new Board();
//const newPiece = new Piece();
const pawn = new Pawn('white','2',['A2','B2']);

newBoard.placeChessPieces(pawn.color,pawn.initialRow,pawn.initialColumnArray);

console.log('hola')
