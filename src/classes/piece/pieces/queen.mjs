import Piece from "../pieceClass.mjs";
import { data } from "../../../../Data/chessPieces.mjs";


export default class Queen extends Piece {
    constructor(color, initialRow, initialColumnArray ){
        
        const pieceName = color === 'white'? data?.whiteQueen: data?.blackQueen
        super(color, pieceName, initialRow, initialColumnArray)
    }
    
}