import Board from "./classes/boardClass/boardClass.mjs";
import Pawn from "./classes/piece/pieces/pawn.mjs";
import Rook from "./classes/piece/pieces/rook.mjs";
import Knight from "./classes/piece/pieces/knight.mjs";
import Bishop from "./classes/piece/pieces/Bishop.mjs";
import Queen from "./classes/piece/pieces/queen.mjs";
import King from "./classes/piece/pieces/king.mjs";


//Crear tablero
const newBoard = new Board();

//Crear piezas
const withePawns = new Pawn('white','2',['A2','C2','E2','G2','B2','D2','F2','H2']);
const blackPawns = new Pawn('black','7',['A7','C7','E7','G7','B7','D7','F7','H7']);
const whiteRook = new Rook ('white','1',['A1','H1']);
const blackRook = new Rook ('black','8',['A8','H8']);
const whiteKnight = new Knight('white','1',['B1','G1']);
const blackKnight = new Knight('black','8',['B8','G8']);
const whiteBishop = new Bishop('white','1',['C1','F1']);
const blackBishop = new Bishop('black','8',['C8','F8']);
const whiteQueen = new Queen('white','1',['D1']);
const blackQueen = new Queen('black','8',['E8']);
const whiteKing = new King('white','1',['E1']);
const blackKing = new King('black','8',['D8'])


//Crear array para almadcenar todas las nuevas piezas
const allPieces = [withePawns, blackPawns,whiteRook,blackRook,whiteKnight,blackKnight,whiteBishop,blackBishop,whiteQueen,blackQueen,blackKing,whiteKing];
// Ejecutar metodo 
allPieces.forEach(pieces => {
    newBoard.placeChessPieces(pieces.pieceName, pieces.initialRow, pieces.initialColumnArray);
});



