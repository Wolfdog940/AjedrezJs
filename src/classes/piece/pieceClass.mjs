import Board from "../boardClass/boardClass.mjs";

export default class Piece {
    constructor( name,color,initialRow, initialPosition,symbol){
        this.color = color;
        this.name = name
        this.initialRow = initialRow;
        this.initialPosition = initialPosition;
        this.hasMove = false;
        this.actualPosition = this.hasMove === false? this.initialPosition :'';
        this._actualPosition = '';
        this.symbol = symbol;
        this.hasBeenKilled = false;
        this.selectedPiece ={}
        
       
    }

 

    ifHasMoved(piece){
        
    }
    move(piece){
        
    this.selectedPiece = piece
    console.log(this.selectedPiece)
    }

    triggerMovement(piece){
        //document.addEventListener('click', (event) => {
            this.move(piece)
                 console.log('se ejecuta metodo 2')
                 
                 
          
             
             
        // });
    }
    kill(){

    }
  
}