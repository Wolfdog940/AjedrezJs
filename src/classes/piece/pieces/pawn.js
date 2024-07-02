import Piece from "../pieceClass";
import { data } from "../../../../data/chessPieces";


export default class Pawn extends Piece {
    constructor(color, initialRow, initialColumnArray ){
        
        const pieceName = color === 'white'? data?.whitePawn: data?.blackPawn;

        super(color, pieceName, initialRow, initialColumnArray);
    }
}