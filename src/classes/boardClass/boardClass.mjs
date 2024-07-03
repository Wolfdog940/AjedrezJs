
export default class Board {
  
    placeChessPieces(piece, rowId, columnsArray,pieceType){
        if (typeof document !== 'undefined') {
        let startingPiecesRow = document.getElementById(rowId);
        let startingPiecesRowId = startingPiecesRow.id;
        
        if(startingPiecesRowId === rowId ){

            columnsArray.forEach(square => {
            //square.innerHtml = piece;
            let elements =document.getElementById(square);
            elements.classList.add(pieceType)
            //let elementId = elements.id
            elements.innerHTML = piece
            //elements.style.color = 'white'
            
            });
        }
        }
        
            
    }
     isValidMoveForPiece(piece, startingPosition) {
        // startingPosition, initialState, finalState
        let initialSquare = document.getElementById(startingPosition);
        let initialSquareId = initialSquare.id;
        let initialSquareArr = initialSquareId.split('');
        let nextSquareNumber = parseInt(initialSquareArr[1]) + 1;
        let nextSquareComplete = initialSquareArr[0] +nextSquareNumber

        switch (piece) {
            case 'Pawn':
                if (initialSquareId === startingPosition) {
                    
                    let allowNormalMovement = [nextSquareComplete];
                    let finalSquarePosition = document.getElementById(allowNormalMovement);
                    let initialSquarePosition = document.getElementById(initialSquareId);
                    finalSquarePosition.style.backgroundColor = 'lime'
                    initialSquarePosition.style.background = 'green'
                    console.log(initialSquare)

                }
                else {
                    console.log('No esta en su posicion inicial')
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
        }
    }
    

}