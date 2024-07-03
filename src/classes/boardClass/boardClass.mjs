
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
    isValidMoveForPiece( piece,startingPosition, initialState, finalState ){

        switch(piece){
            case 'Pawn':
                console.log('es un peon');
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
