import Piece from "../pieceClass.mjs";



export default class King extends Piece {
    constructor(name, color, initialRow, initialPosition,actualPosition, symbol ){
        
        super(name, color, initialRow, initialPosition,actualPosition, symbol)
    }
}