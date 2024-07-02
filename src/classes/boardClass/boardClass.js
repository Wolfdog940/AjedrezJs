export default class Board {
  
    placeChessPieces(piece, rowId, columnsArray){
        
        let startingPiecesRow = document.getElementById(rowId);
        let startingPiecesRowId = startingPiecesRow.id;
        
        if(startingPiecesRowId === rowId ){

            columnsArray.forEach(square => {
                square.innerHtml = piece;

            });

        }
        
            
    }
    isValidMoveForPiece( startingPosition, initialState, finalState ){

    }
}
