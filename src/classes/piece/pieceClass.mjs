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

    Movements(pieceName, hasMove, isGreen, piece) {
        switch (pieceName) {
            case 'panw':
                piece.pawnMovements(hasMove, isGreen, this.allowMovents);
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
