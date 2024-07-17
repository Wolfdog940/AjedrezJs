import { data } from "../../../Data/chessPieces.mjs";

export default class Board {

    constructor() {
        this.isListenerAdded = false; // Bandera para rastrear si el listener ha sido añadido
        this.isGreen = false
        this.event = undefined
    }

    placeChessPieces(piece, rowId, initialPosition, pieceType) {
        if (typeof document !== 'undefined') {
            let startingPiecesRow = document.getElementById(rowId);
            let startingPiecesRowId = startingPiecesRow.id;

            if (startingPiecesRowId === rowId) {
                let element = document.getElementById(initialPosition);
                element.classList.add(pieceType);
                element.innerHTML = piece;
            }
        }
    }
    executePlaceChessPieces(allPieces){
        let pieceName = '';
        let isHasMove = true;
       allPieces.forEach(piece =>{
        this.placeChessPieces(piece.pieceName, piece.initialRow, piece.initialPosition,piece.constructor.name);
        pieceName = piece.constructor.name;
        isHasMove = piece.hasMove;
       
       })
    };

    pieceLocationOnBoard(allPieces) {
        document.addEventListener('click', (event) => {
            const filterPiece = allPieces.find(piece => piece.actualPosition === event.target.id);
            console.log(filterPiece.initialPosition);
            //console.log(`la posicion de mi instancia es ${filterPiece.actualPosition}`);
            //console.log(`mi casilla tiene un id ${event.target.id}`);
            console.log(`esto es una instancia ${filterPiece}`)
            return filterPiece;
        });
    };

    isValidMoveForPiece(piece, startingPosition, hasMove, cellIsGreen, unicode) {
        this.cheackIfIsGreen()
        let initialSquare = document.getElementById(startingPosition);
        let color = '';
        let initialSquareId = initialSquare?.id;
        console.log(initialSquare)
        let initialSquareArr = initialSquareId?.split('');
        
        let nextWhiteSquareNumber = parseInt(initialSquareArr[1]) + 1;
        let nextSpecialWhiteSquareNumber = parseInt(initialSquareArr[1]) + 2;
        let nextBlackSquareNumber = parseInt(initialSquareArr[1]) - 1;
        let nextSpecialBlackSquareNumber = parseInt(initialSquareArr[1]) - 2;

        let nextWhiteSquareComplete = initialSquareArr[0] + nextWhiteSquareNumber;
        let specialWhiteSquareComplet = initialSquareArr[0] + nextSpecialWhiteSquareNumber;
        let nextBlackSquareComplete = initialSquareArr[0] + nextBlackSquareNumber;
        let specialBlackSquareComplet = initialSquareArr[0] + nextSpecialBlackSquareNumber;

        let allowNormalMovement = [];

        // Convertir el código Unicode en el símbolo correspondiente
        let codePoint = parseInt(data.whitePawn.substring(2), 10);
        let symbol = String.fromCodePoint(codePoint);

        

        if (symbol == unicode) {
            color = 'white';
        }

        switch (piece) {
            case 'Pawn':
                
                if (!hasMove && !cellIsGreen) {
                    if (color == 'white') {
                        allowNormalMovement = [nextWhiteSquareComplete, specialWhiteSquareComplet];
                    } else {
                        allowNormalMovement = [nextBlackSquareComplete, specialBlackSquareComplet];
                    }

                    allowNormalMovement.forEach(square => {
                        let finalSquarePosition = document.getElementById(square);
                        let initialSquarePosition = document.getElementById(initialSquareId);
                        finalSquarePosition.style.background = 'lime';
                        finalSquarePosition.style.border = '1px inset black';
                        initialSquarePosition.style.background = 'green';
                        initialSquarePosition.style.border = '1px inset black';
                    });
                }//en caso de que ya se haya movido utilizare la posicion actual
                break;
            case 'Rook':
                console.log('es una torre');
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
        };
    };

    executeIsValidMoveMethod() {
        

        this.isGreen = false;
        
        console.log('is green');

      

        document.addEventListener('click', (event) => {
           
            
            this.isGreen = false;
            const pieceName = event.target.classList[2];
            const cellId = event.target.id;
            const isHasMove = false;  // Por definir cómo determinar esto en tu aplicación
            this.isValidMoveForPiece(pieceName, cellId, isHasMove, this.isGreen, document.getElementById(event.target.id).innerText);
            this.isGreen = false;
            this.event = event
            
        })
    
    
         // Marcar que el listener ha sido añadido
        
       
    };
    cheackIfIsGreen(){
        const allCells = document.querySelectorAll('.chessboard .cell');
      
        allCells.forEach(cell => {
            if (cell.style.background === 'green' || cell.style.background === 'lime') {
                // Si el fondo es verde o lima
                this.isGreen = true;
                console.log('hay casillas verdes')
        
                if (cell.classList.contains('black')) {
                    // Si también tiene la clase 'black'
                    cell.style.background = 'rgba(0, 0, 0, 0.158)';
                    cell.style.border = 'none';
                } else {
                    // Si no tiene la clase 'black'
                    cell.style.background = cell.classList[1];  // Asumiendo que la segunda clase define el color
                    cell.style.border = 'none';
                }
            } else {
                // Si el fondo no es verde ni lima
                const pieceName = this.event?.target.classList[2];  // ¿De dónde viene 'event'? Debe ser pasado o definido anteriormente
                const cellId = this.event?.target?.id;  // ¿De dónde viene 'event'? Similar al anterior
                const isHasMove = false;  // Por definir cómo determinar esto en tu aplicación
        
                // Llamar a la función isValidMoveForPiece con los parámetros necesarios
                console.log('No hay casillas verdes')
        
                this.isGreen = false;
            }
        });
    }
};
