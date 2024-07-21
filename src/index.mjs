// Importaciones

import { Pawn, Rook, King, Knight, Queen, Bishop, Board } from "./classes/piece/pieces/index.mjs";
import {Data} from "../Data/chessPieces.mjs"
import Piece from "./classes/piece/pieceClass.mjs";

// Crear tablero
const newBoard = new Board();
//const newPiece = new Piece();


// Peones blancos
//name, color, initialRow, initialPosition,actualPosition,symbol
const withePawnOne = new Pawn( Data.name.Pawn, Data.color.white, Data.initialRow.pawn.whitePawns, Data.initialPosition.pawns.withePawnOne,  Data.icons.whitePawn);
const withePawnTwo = new Pawn(Data.name.Pawn, Data.color.white, Data.initialRow.pawn.whitePawns, Data.initialPosition.pawns.withePawnTwo, Data.icons.whitePawn);
const withePawnThree = new Pawn(Data.name.Pawn, Data.color.white, Data.initialRow.pawn.whitePawns, Data.initialPosition.pawns.withePawnThree,  Data.icons.whitePawn);
const withePawnFour = new Pawn(Data.name.Pawn, Data.color.white, Data.initialRow.pawn.whitePawns, Data.initialPosition.pawns.withePawnFour,  Data.icons.whitePawn);
const withePawnFive = new Pawn(Data.name.Pawn, Data.color.white, Data.initialRow.pawn.whitePawns, Data.initialPosition.pawns.withePawnFive,  Data.icons.whitePawn);
const withePawnSix = new Pawn(Data.name.Pawn, Data.color.white, Data.initialRow.pawn.whitePawns, Data.initialPosition.pawns.withePawnSix,  Data.icons.whitePawn);
const withePawnSeven = new Pawn(Data.name.Pawn, Data.color.white, Data.initialRow.pawn.whitePawns, Data.initialPosition.pawns.withePawnSeven,  Data.icons.whitePawn);
const withePawnEight = new Pawn(Data.name.Pawn, Data.color.white, Data.initialRow.pawn.whitePawns, Data.initialPosition.pawns.withePawnEight,  Data.icons.whitePawn);

// Peones negros

const blackPawnOne = new Pawn(Data.name.Pawn,Data.color.black, Data.initialRow.pawn.blackPawns, Data.initialPosition.pawns.blackPawnOne, Data.icons.blackPawn);
const blackPawnTwo = new Pawn(Data.name.Pawn,Data.color.black, Data.initialRow.pawn.blackPawns, Data.initialPosition.pawns.blackPawnTwo, Data.icons.blackPawn);
const blackPawnThree = new Pawn(Data.name.Pawn,Data.color.black, Data.initialRow.pawn.blackPawns, Data.initialPosition.pawns.blackPawnThree, Data.icons.blackPawn);
const blackPawnFour = new Pawn(Data.name.Pawn,Data.color.black, Data.initialRow.pawn.blackPawns, Data.initialPosition.pawns.blackPawnFour, Data.icons.blackPawn);
const blackPawnFive = new Pawn(Data.name.Pawn,Data.color.black, Data.initialRow.pawn.blackPawns, Data.initialPosition.pawns.blackPawnFive, Data.icons.blackPawn);
const blackPawnSix = new Pawn(Data.name.Pawn,Data.color.black, Data.initialRow.pawn.blackPawns, Data.initialPosition.pawns.blackPawnSix, Data.icons.blackPawn);
const blackPawnSeven = new Pawn(Data.name.Pawn,Data.color.black, Data.initialRow.pawn.blackPawns, Data.initialPosition.pawns.blackPawnSeven, Data.icons.blackPawn);
const blackPawnEight = new Pawn(Data.name.Pawn,Data.color.black, Data.initialRow.pawn.blackPawns, Data.initialPosition.pawns.blackPawnEight,Data.icons.blackPawn);


//Torres blancas

const witheRookOne = new Rook(Data.name.Rook, Data.color.white, Data.initialRow.rooks.whiteRook, Data.initialPosition.rooks.whiteRookOne,  Data.icons.whiteRook);
const witheRookTwo = new Rook(Data.name.Rook, Data.color.white, Data.initialRow.rooks.whiteRook, Data.initialPosition.rooks.whiteRookTwo,  Data.icons.whiteRook);

//Torres negras

const blackRookOne = new Rook(Data.name.Rook, Data.color.black, Data.initialRow.rooks.blackRook, Data.initialPosition.rooks.blackRookOne,  Data.icons.blackRook);
const blackRookTwo = new Rook(Data.name.Rook, Data.color.black, Data.initialRow.rooks.blackRook, Data.initialPosition.rooks.blackRookTwo,  Data.icons.blackRook);

// //Caballos blanco

const whiteKnightOne = new Knight(Data.name.Knight, Data.color.white, Data.initialRow.knights.whiteKnight,Data.initialPosition.knights.whiteKnightOne, Data.icons.whiteKnight);
const whiteKnightTwo = new Knight(Data.name.Knight, Data.color.white, Data.initialRow.knights.whiteKnight,Data.initialPosition.knights.whiteKnightTwo, Data.icons.whiteKnight);

// //Caballo negro

const blackKnigthOne = new Knight(Data.name.Knight, Data.color.white, Data.initialRow.knights.blackKing,Data.initialPosition.knights.blackKnightOne, Data.icons.blackKnight);
const blackKnigthTwo = new Knight(Data.name.Knight, Data.color.white, Data.initialRow.knights.blackKing,Data.initialPosition.knights.blackKnightTwo, Data.icons.blackKnight);

// //Alfil blanco

const whiteBishopOne = new Bishop(Data.name.Bishop,Data.color.white,Data.initialRow.bishops.witheBishop,Data.initialPosition.bishops.whiteBishopOne,Data.icons.whiteBishop);
const whiteBishopTwo = new Bishop(Data.name.Bishop,Data.color.white,Data.initialRow.bishops.witheBishop,Data.initialPosition.bishops.whiteBishopTwo,Data.icons.whiteBishop);

// //Alfil Negro

const blackBishopOne = new Bishop(Data.name.Bishop,Data.color.black,Data.initialRow.bishops.blackBishop,Data.initialPosition.bishops.blackBishopOne,Data.icons.blackBishop);
const blackBishopTwo = new Bishop(Data.name.Bishop,Data.color.black,Data.initialRow.bishops.blackBishop,Data.initialPosition.bishops.blackBishopTwo,Data.icons.blackBishop);

// //Rey blanco

const whiteKing = new King(Data.name.King,Data.color.white,Data.initialRow.king.whiteKing,Data.initialPosition.king.whiteKing,Data.icons.whiteKing);

// //Rey Negro

const blackKing = new King(Data.name.King,Data.color.black,Data.initialRow.king.blackKing,Data.initialPosition.king.blackKing,Data.icons.blackKing);

// //Reina blanca

const whiteQueen = new Queen (Data.name.Queen,Data.color.white,Data.initialRow.queen.whiteQueen,Data.initialPosition.queen.whiteQueen,Data.icons.whiteQueen);

// //Reina negra

const blackQueen = new Queen (Data.name.Queen,Data.color.black,Data.initialRow.queen.blackQuenn,Data.initialPosition.queen.blackQuenn,Data.icons.blackQueen);

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

//situar piezas en tablero
newBoard.executePlaceChessPieces(allPieces);

//lanza eventos click
newBoard.initEventListeners(allPieces)


