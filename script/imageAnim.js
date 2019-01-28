(() => {

   //variables always come first
   // set up  the puzzle pieces and boards
   const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

   let piecesBoards = document.querySelector(".puzzle-pieces"),
       puzzleBoards = document.querySelector(".puzzle-board"),
       puzzleSelectors = document.querySelectorAll("#buttonHolder img");

   //functions go in the middle
   function createPuzzlePieces(pictureIndex){
   	//generate puzzle pieces for the left hand side
   	// debugger;
   	pieces.forEach((piece, index) => {
   		let newPuzzlePiece = `<img id="pieces${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`
   		piecesBoards.innerHTML+= newPuzzlePiece;
   	});

   	puzzleBoard.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`;

   }    

   function resetPuzzlePieces(){
   	//empty the thumbnail container
   	piecesBoards.innerHTML = "";
   	createPuzzlePieces(this.dataset.puzzleref);
   }

   //event handling down here
   puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));
   createPuzzlePieces(0);
   

})();