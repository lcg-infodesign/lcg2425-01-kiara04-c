function preload() {
  // put preload code here
}

function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight);
  blendMode(MULTIPLY);
}

function draw() {
  // put drawing code here
  background("white");
  noStroke();
  fill (248,114,139);

  let larghezza=30;
  let altezza=220;
  let oGutter=2;
  let vGutter=5;

  let columns=(windowWidth)/(larghezza+oGutter);
  let rows=(windowHeight)/(altezza+vGutter);

  for(let i=0; i<columns; i++){
    for(let j=0; j<rows; j++){

      //metà della distanza trai quadratini
      //in orizzontale per x e in verticale per y
      let xPos=i*(larghezza + oGutter);
      let yPos=j*(altezza + vGutter) + random (-70,70);
      rect(xPos, yPos, larghezza, altezza);
    }  
  }

  fill("black");
  text ("Vera Molnar, Untitled, 1985. Courtesy of The Anne and Michael Spalter Digital Art Collection", 20, windowHeight-20);
}
