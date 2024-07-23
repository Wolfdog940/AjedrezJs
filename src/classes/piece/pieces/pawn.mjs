import Piece from "../pieceClass.mjs";


export default class Pawn extends Piece {
    constructor(name, color, initialRow, initialPosition,actualPosition, symbol ){
        
        


        super(name, color, initialRow, initialPosition,actualPosition, symbol)

        this.normalMovement = 1;
        this.specialMovement = 2;
        
    }
    

}