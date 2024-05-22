function splitDrawing(drawingType, numVariable) {
  let tableImage = document.querySelector("#card-" + drawingType + ">.container>.table");
  let drawingImage = document.querySelector("#card-" + drawingType + ">.container>.drawing");

  let numDrawing = parseInt(document.querySelector("#card-" + drawingType + ">.container>.drawing").style.backgroundImage.match(/\d+/)[0]);

  if (numDrawing == numVariable) {
    tableImage.style.backgroundImage = "url('assets/TABLE-" + drawingType.toUpperCase() + "_1.png')";
    drawingImage.style.backgroundImage = "url('assets/" + drawingType.toUpperCase() + "_1.png')";
  } else {
    tableImage.style.backgroundImage = "url('assets/TABLE-" + drawingType.toUpperCase() + "_" + (numDrawing + 1) + ".png')";
    drawingImage.style.backgroundImage = "url('assets/" + drawingType.toUpperCase() + "_" + (numDrawing + 1) + ".png')";
  }
}
