function splitDrawing(drawingType) {
  let tableImage = document.querySelector("#card-" + drawingType + ">.container>.table");
  let drawingImage = document.querySelector("#card-" + drawingType + ">.container>.drawing");

  tableImage.style.backgroundImage = "url('assets/TABLE-AND_2.png')";
  drawingImage.style.backgroundImage = "url('assets/AND_2.png')";
}
