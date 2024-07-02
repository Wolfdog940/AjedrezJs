export default class Board {
  
    placeChessPieces(piece, rowId, columnsArray){
        if (typeof document !== 'undefined') {
        let startingPiecesRow = document.getElementById(rowId);
        let startingPiecesRowId = startingPiecesRow.id;
        
        if(startingPiecesRowId === rowId ){

            columnsArray.forEach(square => {
                //square.innerHtml = piece;
                let elements =document.getElementById(square)
                elements.innerHTML = 'hola'
                
                
                
                console.log(elements)
                //console.log(a)

            });
        }
        }
        
            
    }
    isValidMoveForPiece( startingPosition, initialState, finalState ){

    }
}
