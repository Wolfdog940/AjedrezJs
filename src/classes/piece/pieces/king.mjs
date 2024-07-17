import Piece from "../pieceClass.mjs";
import { data } from "../../../../Data/chessPieces.mjs";


export default class King extends Piece {
    constructor(color, initialRow, initialPosition ){
        
        const pieceName = color === 'white'? data?.whiteKing: data?.blackKing
        super(color, pieceName, initialRow, initialPosition)
    }
    
}