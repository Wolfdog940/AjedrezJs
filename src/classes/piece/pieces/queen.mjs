import Piece from "../pieceClass.mjs";
import { data } from "../../../../Data/chessPieces.mjs";


export default class Queen extends Piece {
    constructor(color, initialRow, initialPosition ){
        
        const pieceName = color === 'white'? data?.whiteQueen: data?.blackQueen
        super(color, pieceName, initialRow, initialPosition)
    }
    
}