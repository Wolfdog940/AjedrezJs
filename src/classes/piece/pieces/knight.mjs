import Piece from "../pieceClass.mjs";
import { data } from "../../../../Data/chessPieces.mjs";


export default class Knight extends Piece {
    constructor(color, initialRow, initialColumnArray ){
        
        const pieceName = color === 'white'? data?.whiteKnight: data?.blackKnight
        super(color, pieceName, initialRow, initialColumnArray)
    }
    
}