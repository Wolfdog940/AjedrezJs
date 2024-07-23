import Piece from "../pieceClass.mjs";

export default class Pawn extends Piece {
    constructor(name, color, initialRow, initialPosition, actualPosition, symbol) {
        super(name, color, initialRow, initialPosition, actualPosition, symbol);
        this.normalMovement = 1;
        this.specialMovement = 2;
    }

    pawnMovements(hasMove, isGreen) {
        switch(this.color) {
            case 'white':
                if (isGreen == false) {
                    if (hasMove === false) {
                        this.allowMovents.push(
                            this.actualPosition.charAt(0) + 
                            (parseInt(this.actualPosition.charAt(1)) + (hasMove === false ? 
                            this.specialMovement : 
                            this.normalMovement))
                        );
                        
                        hasMove == false ? 
                            this.allowMovents.push(
                                this.actualPosition.charAt(0) + 
                                (parseInt(this.actualPosition.charAt(1)) + this.normalMovement)
                            ) : 
                            null;
                        
                        document.getElementById(this.actualPosition).style.background = '#90EE90';
        
                        this.allowMovents.forEach(movent => {
                            document.getElementById(movent).style.background = '#90EE90';
                            console.log(this.allowMovents)
                        });
                    } else {
                        document.getElementById(this.actualPosition).style.background = '#90EE90';
                    }
                }
                break;
            case 'black':
                // Implementar lógica para los peones negros si es necesario
                break;
        }
    }
}
