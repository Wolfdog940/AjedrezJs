

export default class Piece {
    constructor(name, color, initialRow, initialPosition, symbol) {
        this.color = color;
        this.name = name;
        this.initialRow = initialRow;
        this.initialPosition = initialPosition;
        this.hasMove = false;
        this.actualPosition = this.hasMove === false ? this.initialPosition : '';
        this._actualPosition = '';
        this.symbol = symbol;
        this.hasBeenKilled = false;
        this.selectedPiece = {};
        this.allowMovents = [];
    }

    ifHasMoved(piece) {
        // Implementar lógica si es necesario
    }

    Movements(piece, hasMove, isGreen) {
        switch (piece) {
            case 'panw':
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
                            console.log(this.allowMovents);
                        });
                    } else {
                        document.getElementById(this.actualPosition).style.background = '#90EE90';
                    }
                }
                break;

            case 'rook':
                // Implementar lógica para la torre
                break;
            case 'knight':
                // Implementar lógica para el caballo
                break;
        }
    }

    kill() {
        // Implementar lógica de eliminación de la pieza
    }
}
