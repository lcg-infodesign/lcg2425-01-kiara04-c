function preload() {
  // put preload code here
}

function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  background("white");
  noStroke();
  fill (248,114,139,190);

  let larghezza=40;
  let altezza=120;
  let oGutter=1;
  let vGutter=5;

  let columns=windowWidth/(larghezza+oGutter);
  let rows=windowHeight/(altezza+vGutter);

  for(let i=0; i<columns; i++){
    for(let j=0; j<rows; j++){

      //2.5 è la metà della distanza trai quadratini
      //in orizzontale per x e in verticale per y
      let xPos=i*(larghezza+oGutter);
      let yPos=j*(altezza + vGutter) + random (-20,20);
      rect(xPos, yPos, larghezza, altezza);
    }  
  }

  fill("black");
  text ("Vera Molnar, Untitled, 1985. Courtesy of The Anne and Michael Spalter Digital Art Collection", 20, windowHeight-20);
}
