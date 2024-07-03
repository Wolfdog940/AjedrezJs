export default class Board {
  
    placeChessPieces(piece, rowId, columnsArray){
        if (typeof document !== 'undefined') {
        let startingPiecesRow = document.getElementById(rowId);
        let startingPiecesRowId = startingPiecesRow.id;
        
        if(startingPiecesRowId === rowId ){

            columnsArray.forEach(square => {
                //square.innerHtml = piece;
                
                
                let elements =document.getElementById(square)
                let elementId = elements.id
                elements.innerHTML = piece
                //elements.style.color = 'white'
                console.log(elements)
                 

            });
        }
        }
        
            
    }
    isValidMoveForPiece( startingPosition, initialState, finalState ){

    }
}
