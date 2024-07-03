import Piece from "./classes/piece/pieceClass.mjs";
import { Pawn,Rook,King,Knight,Queen,Bishop,Board} from "./classes/piece/pieces/index.mjs";

//Traerme todas las celdas
const cells = document.querySelectorAll('.cell');
let pieceName = '';

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
// Ejecutar metodo para poner fichas en el tablero
allPieces.forEach(pieces => {
    newBoard.placeChessPieces(pieces.pieceName, pieces.initialRow, pieces.initialColumnArray,pieces.constructor.name);
    console.log(pieces.constructor.name)
    pieceName = pieces.constructor.name;
});

//Ejecutar metodo para
document.addEventListener('click',(event)=>{
    pieceName = event.target.classList[2]
    newBoard.isValidMoveForPiece(pieceName,event.target.id);
    console.log(event)
})




