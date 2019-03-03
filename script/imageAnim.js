(() => {

   //variables always come first
   // set up  the puzzle pieces and boards
   const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

   let piecesBoards = document.querySelector(".puzzle-pieces"),
       puzzleBoards = document.querySelector(".puzzle-board"),
       puzzleSelectors = document.querySelectorAll("#buttonHolder img");

   let dropZones = document.querySelectorAll('.drop-zone');

   //functions go in the middle
   function createPuzzlePieces(pictureIndex){
   	//generate puzzle pieces for the left hand side
   	// debugger;
   	pieces.forEach((piece, index) => {
   	let newPuzzlePiece = `<img draggable id="pieces${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`
   	piecesBoards.innerHTML+= newPuzzlePiece;
   	});

   	puzzleBoards.style.backgroundImage = `url(./images/backGround${pictureIndex}.jpg)`;

    initDrag();

   }


   // drag and drop functionality goes here

   function initDrag() {
      piecesBoards.querySelectorAll('img').forEach(img => {
      img.addEventListener("dragstart", function(e) {
      // e.preventDefault();
      console.log('draggin...');
      e.dataTransfer.setData("text/plain", this.id)
         });
      });

   }

      // handle dragover and drop
      dropZones.forEach(zone => {
      zone.addEventListener("dragover", function(e) {
      e.preventDefault();
      console.log("you dragged over me!");
      });

       zone.addEventListener("drop", function(e) {
        e.preventDefault();
        console.log("you dropped sumpin on me!");

         let piece = e.dataTransfer.getData("text/plain");
         e.target.appendChild(document.querySelector(`#${piece}`));

      });

      });

   //Reset each of the drop zones
   function resetPuzzlePieces(){
    //empty the thumbnail container
    // debugger;
   	piecesBoards.innerHTML = "";
   	createPuzzlePieces(this.dataset.puzzleref);
    // foreach has specify a callback function in the array
    // empty the drop zones
    dropZones.forEach(zone => {
    // removeChild
    while (zone.firstChild) zone.removeChild(zone.firstChild);
    // ouputs a message and writes into the console of the browser Chrome
    console.log("Ciao, see you later!");
    });
    }
    // for (var i = 0, zone = dropZones.length; i < zone; i++) {
    // someFn(dropZones[i]);

   //event handling down here
   puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));
   createPuzzlePieces(0);


})();
