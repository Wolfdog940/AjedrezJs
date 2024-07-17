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

//Torres blancas

const witheRookOne = new Rook('white','1','A1','A1');
const witheRookTwo = new Rook('white','1','H1','H1');

//Torres negras

const blackRookOne = new Rook('black','8','A8','A8');
const blackRookTwo = new Rook('black','8','H8','H8')

//Caballos blanco

const whiteKnightOne = new Knight('white','1','B1','B1');
const whiteKnightTwo = new Knight('white','1','G1','G1');

//Caballo negro

const blackKnigthOne = new Knight('black','8','B8','B8');
const blackKnigthTwo = new Knight('black','8','G8','G8');

//Alfil blanco

const whiteBishopOne = new Bishop('white','1','C1','C1');
const whiteBishopTwo = new Bishop('white','1','F1','F1');

//Alfil Negro

const blackBishopOne = new Bishop('black','8','C8','C8');
const blackBishopTwo = new Bishop('black','8','F8','F8');

//Rey blanco

const whiteKing = new King('white','1','D1','D1');

//Rey Negro

const blackKing = new King('black','8','D8','D8');

//Reina blanca

const whiteQueen = new Queen('white','1','E1','E1');

//Reina negra

const blackQueen = new Queen('black','8','E8','E8');

// Array de todas las piezas
const allPieces = [
    withePawnOne,withePawnTwo,withePawnThree,withePawnFour,withePawnFive,withePawnSix,withePawnSeven,withePawnEight,
    blackPawnOne,blackPawnTwo,blackPawnThree,blackPawnFour,blackPawnFive,blackPawnSix,blackPawnSeven,blackPawnEight,
    witheRookOne,witheRookTwo,
    blackRookOne,blackRookTwo,
    whiteKnightOne,whiteKnightTwo,
    blackKnigthOne,blackKnigthTwo,
    whiteBishopOne,whiteBishopTwo,
    blackBishopOne,blackBishopTwo,
    whiteKing,blackKing,
    whiteQueen,blackQueen

];

// Ejecutar método para colocar piezas en el tablero
newBoard.executePlaceChessPieces(allPieces);

// Ejecutar método para ubicar las piezas en el tablero

newBoard.pieceLocationOnBoard(allPieces);

// Ejecutar método para validar y mover las piezas


newBoard.executeIsValidMoveMethod();







