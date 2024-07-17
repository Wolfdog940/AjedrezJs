import Piece from "../pieceClass.mjs";
import { data } from "../../../../Data/chessPieces.mjs";


export default class Bishop extends Piece {
    constructor(color, initialRow, initialPosition ){
        
        const pieceName = color === 'white'? data?.whiteBishop: data?.blackBishop
        super(color, pieceName, initialRow, initialPosition)
    }
    
}