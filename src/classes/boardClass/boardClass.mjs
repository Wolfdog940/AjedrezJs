export default class Board {
    constructor() {
        this.isListenerAdded = false;
        this.isGreen = false;
        this.event = undefined;
        this.hasMove = false;
        this.totalCols = 8;
        this.totalRows = 8;
        this.filterPiece = {};
    }

    placeChessPieces(symbol, initialPosition) {
        let element = document.getElementById(initialPosition);
        element.innerHTML = symbol;
    }

    executePlaceChessPieces(allPieces) {
        allPieces.forEach(piece => {
            this.placeChessPieces(piece.symbol, piece.initialPosition);
        });
    }

    updateFilterPiece(allPieces, event) {
        this.filterPiece = allPieces.find(piece => piece.initialPosition === event.target.id);
    }

    initEventListeners(allPieces) {
        document.addEventListener('click', (event) => {
            this.updateFilterPiece(allPieces, event);
            this.cheackIfIsGreen();
            this.isValidMoveForPiece();
        });
    }

    isValidMoveForPiece() {
        switch (this.filterPiece?.name) {
            case 'panw':
                this.filterPiece.Movements(this.filterPiece.name, this.hasMove, this.isGreen, this.filterPiece);
                this.filterPiece.allowMovents = [];
                break;
            case 'rook':
                // Implementar lógica para la torre
                break;
            case 'Knight':
                // Implementar lógica para el caballo
                break;
            case 'Bishop':
                // Implementar lógica para el alfil
                break;
            case 'Queen':
                // Implementar lógica para la reina
                break;
            case 'King':
                // Implementar lógica para el rey
                break;
        }
    }

    cheackIfIsGreen() {
        const allCells = document.querySelectorAll('.chessboard .cell');
        allCells.forEach(cell => {
            if (cell.style.background === 'rgb(144, 238, 144)') {
                this.isGreen = true;
                if (cell.classList.contains('black')) {
                    cell.style.background = 'rgba(0, 0, 0, 0.158)';
                    cell.style.border = 'none';
                } else {
                    cell.style.background = cell.classList[1];
                    cell.style.border = 'none';
                }
            } else {
                this.isGreen = false;
            }
        });
    }
}

 

    


