function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight);
  blendMode(MULTIPLY);
}

function draw() {
  background("white");
  noStroke();
  fill(248, 114, 139);

  let larghezza = 17;
  let altezza = 150;
  let oGutter = 2;
  let vGutter = 5;
  let margin = 80;

  let columns = (windowWidth - 2 * margin) / (larghezza + oGutter);
  let rows = (windowHeight - 4 * margin) / (altezza + vGutter);

  // Disegna la prima fila
  for (let i = 0; i < columns; i++) {
    let xPos = margin + i * (larghezza + oGutter);
    let yPos = margin + random(-50, 30);
    rect(xPos, yPos, larghezza, altezza);
  }

  // Disegna la fila aggiuntiva
  for (let i = 0; i < columns; i++) {
    let xPos = -10 + margin + i * (larghezza + oGutter);
    let yPos = margin + 140 + vGutter + random(-50, 30); // Sposta la nuova fila
    rect(xPos, yPos, larghezza, altezza);
  }

  // Disegna la seconda fila
  for (let i = 0; i < columns; i++) {
    let xPos = -20 + margin + i * (larghezza + oGutter);
    let yPos = margin + 2 * (altezza + vGutter) + random(-50, 30);
    rect(xPos, yPos, larghezza, altezza);
  }
  
  fill("black");
  text ("Vera Molnar, Untitled, 1985. Courtesy of The Anne and Michael Spalter Digital Art Collection", 20, windowHeight-20);
}
