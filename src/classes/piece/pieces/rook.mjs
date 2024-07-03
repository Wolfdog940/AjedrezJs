import Piece from "../pieceClass.mjs";
import { data } from "../../../../Data/chessPieces.mjs";


export default class Rook extends Piece {
    constructor(color, initialRow, initialColumnArray ){
        
        const pieceName = color === 'white'? data?.whiteRook: data?.blackRook
        super(color, pieceName, initialRow, initialColumnArray)
    }
    
}