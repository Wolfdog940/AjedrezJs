import Piece from "../piece/pieceClass.mjs";

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
            this.isValidMoveForPiece();
        });
    }

    isValidMoveForPiece() {
        console.log(this.filterPiece);

        switch (this.filterPiece?.name) {
            case 'panw':
                this.filterPiece.Movements(this.filterPiece.name, this.hasMove,this.isGreen);
                this.isGreen = true;
                break;
            case 'rook':
                if (this.filterPiece.hasMove == false && this.isGreen == false) {
                    console.log(this.filterPiece?.name);
                }
                break;
            case 'Knight':
                console.log('es un caballero');
                break;
            case 'Bishop':
                console.log('es un alfil');
                break;
            case 'Queen':
                console.log('es una Reina');
                break;
            case 'King':
                console.log('es un Rey');
                break;
        }
    }
}

    // executeIsValidMoveMethod() {
        

        
        
        

      

    //     document.addEventListener('click', (event) => {
           
            
            
    //         const pieceName = event.target.classList[2];
    //         const cellId = event.target.id;
    //           // Por definir cómo determinar esto en tu aplicación
    //         this.isValidMoveForPiece(pieceName,  this.hasMove, this.isGreen, document.getElementById(event.target.id).innerText);
    //         this.isGreen = false;
    //         this.event = event
           
            
    //     })
    
    
    //      // Marcar que el listener ha sido añadido
        
       
    // };

    // cheackIfIsGreen(){
    //     const allCells = document.querySelectorAll('.chessboard .cell');
      
    //     allCells.forEach(cell => {
    //         if (cell.style.background === 'green' || cell.style.background === 'lime') {
    //             // Si el fondo es verde o lima
    //             this.isGreen = true;
    //             console.log('hay casillas verdes')
        
    //             if (cell.classList.contains('black')) {
    //                 // Si también tiene la clase 'black'
    //                 cell.style.background = 'rgba(0, 0, 0, 0.158)';
    //                 cell.style.border = 'none';
    //             } else {
    //                 // Si no tiene la clase 'black'
    //                 cell.style.background = cell.classList[1];  // Asumiendo que la segunda clase define el color
    //                 cell.style.border = 'none';
    //             }
    //         } else {
    //             // Si el fondo no es verde ni lima
    //             const pieceName = this.event?.target.classList[2];  // ¿De dónde viene 'event'? Debe ser pasado o definido anteriormente
    //             const cellId = this.event?.target?.id;  // ¿De dónde viene 'event'? Similar al anterior
    //             const isHasMove = false;  // Por definir cómo determinar esto en tu aplicación
        
    //             // Llamar a la función isValidMoveForPiece con los parámetros necesarios
    //             console.log('No hay casillas verdes')
        
    //             this.isGreen = false;
    //         }
    //     });
    // }


