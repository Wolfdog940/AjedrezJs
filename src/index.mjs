// Importaciones
import { Pawn, Rook, King, Knight, Queen, Bishop, Board } from "./classes/piece/pieces/index.mjs";

// Crear tablero
const newBoard = new Board();

// Crear piezas
// Peones blancos
const withePawnOne = new Pawn('white', '2', 'A2', 'A2');
const withePawnTwo = new Pawn('white', '2', 'C2', 'C2');
const withePawnThree = new Pawn('white', '2', 'E2', 'E2');
const withePawnFour = new Pawn('white', '2', 'G2', 'G2');
const withePawnFive = new Pawn('white', '2', 'B2', 'B2');
const withePawnSix = new Pawn('white', '2', 'D2', 'D2');
const withePawnSeven = new Pawn('white', '2', 'F2', 'F2');
const withePawnEight = new Pawn('white', '2', 'H2', 'H2');

// Peones negros
const blackPawnOne = new Pawn('black', '7', 'A7', 'A7');
const blackPawnTwo = new Pawn('black', '7', 'C7', 'C7');
const blackPawnThree = new Pawn('black', '7', 'E7', 'E7');
const blackPawnFour = new Pawn('black', '7', 'G7', 'G7');
const blackPawnFive = new Pawn('black', '7', 'B7', 'B7');
const blackPawnSix = new Pawn('black', '7', 'D7', 'D7');
const blackPawnSeven = new Pawn('black', '7', 'F7', 'F7');
const blackPawnEight = new Pawn('black', '7', 'H7', 'H7');

// Array de todas las piezas
const allPieces = [
    withePawnOne,
    withePawnTwo,
    withePawnThree,
    withePawnFour,
    withePawnFive,
    withePawnSix,
    withePawnSeven,
    withePawnEight,
    blackPawnOne,
    blackPawnTwo,
    blackPawnThree,
    blackPawnFour,
    blackPawnFive,
    blackPawnSix,
    blackPawnSeven,
    blackPawnEight
];

// Ejecutar método para colocar piezas en el tablero
newBoard.executePlaceChessPieces(allPieces);

// Ejecutar método para ubicar las piezas en el tablero
newBoard.pieceLocationOnBoard(allPieces);

// Ejecutar método para validar y mover las piezas
allPieces.forEach(piece => {
    newBoard.executeIsValidMoveMethod(piece.initialPosition, piece.actualPosition);
});



 