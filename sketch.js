function preload() {
  // put preload code here
}

function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight);
  background("lightblue");
  // put setup code here
  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);
}

function draw() {
  // put drawing code here
  background("white");
  noStroke();

  let r=random(12,69,108);
  let g=random(2,110,110);
  let b=random(29,162,157);

  fill(r,g,b);

  let altezza=random(10,40);
  let larghezza=random(10,40);
  let gutter=5;
  let rows=windowHeight/(altezza+gutter);
  let columns=windowWidth/(larghezza+gutter);

  for(let i=0; i<columns; i++){
    for(let j=0; j<rows; j++){
      let xPos=i*(larghezza + gutter);
      let yPos=j*(altezza + gutter);
      rect(xPos, yPos, larghezza, altezza);
    }
}
}
