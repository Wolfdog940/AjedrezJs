import { data } from "../../../Data/chessPieces.mjs";

export default class Board {

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
    }

    pieceLocationOnBoard(allPieces) {
        document.addEventListener('click', (event) => {
            const filterPiece = allPieces.find(piece => piece.actualPosition === event.target.id);
            //console.log(filterPiece);
            //console.log(`la posicion de mi instancia es ${filterPiece.actualPosition}`);
            //console.log(`mi casilla tiene un id ${event.target.id}`);
            return filterPiece;
        });
    }

    isValidMoveForPiece(piece, startingPosition, hasMove, cellIsGreen, unicode) {
        let initialSquare = document.getElementById(startingPosition);
        let color = '';
        let initialSquareId = initialSquare.id;
        let initialSquareArr = initialSquareId.split('');
        
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

        console.log(unicode == symbol);
        console.log(symbol);

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
                }
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
        }//el else tien que ir con el actual position
    }

    executeIsValidMoveMethod(initialPosition,actualPosition) {
        let isGreen = false;
        console.log('is green');

        document.addEventListener('click', (event) => {
            const allCells = document.querySelectorAll('.chessboard .cell');
            isGreen = false;

            allCells.forEach(cell => {
                if (cell.style.background === 'green' || cell.style.background === 'lime') {
                    isGreen = true;

                    if (cell.classList.contains('black')) {
                        cell.style.background = 'rgba(0, 0, 0, 0.158)';
                        cell.style.border = 'none';
                    } else {
                        cell.style.background = cell.classList[1];
                        cell.style.border = 'none';
                    }
                } else {
                    const pieceName = event.target.classList[2];
                    const cellId = event.target.id;
                    const isHasMove = false;  // Por definir cómo determinar esto en tu aplicación
                    this.isValidMoveForPiece(pieceName, cellId, isHasMove, isGreen, document.getElementById(event.target.id).innerText);
                    isGreen = false;
                }
            });
        });
    }
}
