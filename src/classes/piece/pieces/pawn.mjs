import Piece from "../pieceClass.mjs";
import { data } from "../../../../Data/chessPieces.mjs";


export default class Pawn extends Piece {
    constructor(color, initialRow, initialPosition,actualPosition ){
        
        const pieceName = color === 'white'? data?.whitePawn: data?.blackPawn

        

        super(color, pieceName, initialRow, initialPosition,actualPosition)
    }
    
}