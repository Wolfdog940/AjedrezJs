import Board from "./classes/boardClass/boardClass.mjs";
import Piece from "./classes/piece/pieceClass.mjs";
import Pawn from "./classes/piece/pieces/pawn.mjs";

const newBoard = new Board();
//const newPiece = new Piece();
const withePawn = new Pawn('white','2',['A2','C2','E2','G2','B2','D2','F2','H2']);
//const blackPawn = new Pawn('white','2',['B2','D2','F2','H2'])

newBoard.placeChessPieces(withePawn.pieceName,withePawn.initialRow,withePawn.initialColumnArray);
//newBoard.placeChessPieces(blackPawn.pieceName,blackPawn.initialRow,blackPawn.initialColumnArray);

console.log('hola')
