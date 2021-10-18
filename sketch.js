let cuadrado;
let circulo;
let rombo;
let triangulo;

let x;
let y;
let diametro;
let altura;
let ancho;

let figuraAtrapada;

let zonaCirculo;
let zonaCuadrado;
let zonaRombo;
let zonaTriangulo;

function setup() {
  createCanvas(500, 700);
  circulo = new Circulo(100, 600, diametro, diametro);
  cuadrado = new Cuadrado(190, 600, altura, ancho);
  rombo = new Rombo(250, 580, 50, 50);
  triangulo = new Triangulo(340, 580, 50, 50);
  figuraAtrapada = null;
  zonaCirculo = color(255);
  zonaCuadrado = color(255);
  zonaRombo = color(255);
  zonaTriangulo = color(255);
}

function draw() {
  background(220);

  fill(255, 255, 255);
  rectMode(CORNER);
  fill(zonaCirculo);
  rect(0, 0, 250, 250);
  fill(zonaCuadrado);
  rect(250, 0, 250, 250);
  fill(zonaRombo);
  rect(0, 250, 250, 250);
  fill(zonaTriangulo);
  rect(250, 250, 250, 250);

  fill(0);
  textSize(25);
  textAlign(CENTER, CENTER);
  text("Circulo", 100, 220);
  text("Cuadrado", 360, 220);
  text("Rombo", 100, 470);
  text("Triangulo", 360, 470);

  circulo.show();
  cuadrado.show();
  rombo.show();
  triangulo.show();

  if (figuraAtrapada) {
    if (figuraAtrapada instanceof Circulo && figuraAtrapada.x > 0 && figuraAtrapada.x < 250 && figuraAtrapada.y > 0 && figuraAtrapada.y < 250) {
      zonaCirculo = color(0, 255, 0);
    } else if (!(figuraAtrapada instanceof Circulo) && figuraAtrapada.x > 0 && figuraAtrapada.x < 250 && figuraAtrapada.y > 0 && figuraAtrapada.y < 250) {
      zonaCirculo = color(255, 0, 0)
    }

    if (figuraAtrapada instanceof Cuadrado && figuraAtrapada.x > 250 && figuraAtrapada.x < 500 && figuraAtrapada.y > 0 && figuraAtrapada.y < 250) {
      zonaCuadrado = color(0, 255, 0);
    }  else if (!(figuraAtrapada instanceof Cuadrado) && figuraAtrapada.x > 250 && figuraAtrapada.x < 500 && figuraAtrapada.y > 0 && figuraAtrapada.y < 250) {
      zonaCuadrado = color(255, 0, 0)
    }
 
    if (figuraAtrapada instanceof Rombo && figuraAtrapada.x > 0 && figuraAtrapada.x < 250 && figuraAtrapada.y > 250 && figuraAtrapada.y < 500) {
      zonaRombo = color(0, 255, 0);
    }  else if (!(figuraAtrapada instanceof Rombo) && figuraAtrapada.x > 0 && figuraAtrapada.x < 250 && figuraAtrapada.y > 250 && figuraAtrapada.y < 500) {
      zonaRombo = color(255, 0, 0)
    }
  
    if (figuraAtrapada instanceof Triangulo && figuraAtrapada.x > 250 && figuraAtrapada.x < 500 && figuraAtrapada.y > 250 && figuraAtrapada.y < 500) {
      zonaTriangulo = color(0, 255, 0);
    }  else if (!(figuraAtrapada instanceof Triangulo) && figuraAtrapada.x > 250 && figuraAtrapada.x < 500 && figuraAtrapada.y > 250 && figuraAtrapada.y < 500) {
      zonaTriangulo = color(255, 0, 0)
    }
  }
}

function mousePressed() {
  console.log(circulo.click(mouseX, mouseY))
  console.log(cuadrado.click(mouseX, mouseY))
  console.log(rombo.click(mouseX, mouseY))
  console.log(triangulo.click(mouseX, mouseY))
  if (circulo.click(mouseX, mouseY) && figuraAtrapada == null) {
    figuraAtrapada = circulo;
  }

  if (cuadrado.click(mouseX, mouseY) && figuraAtrapada == null) {
    figuraAtrapada = cuadrado;
  }

  if (rombo.click(mouseX, mouseY) && figuraAtrapada == null) {
    figuraAtrapada = rombo;
  }

  if (triangulo.click(mouseX, mouseY) && figuraAtrapada == null) {
    figuraAtrapada = triangulo;
  }
}

function mouseDragged() {
  if (figuraAtrapada != null) {
    figuraAtrapada.x = mouseX;
    figuraAtrapada.y = mouseY;
  }
}

function mouseReleased() {
  if (figuraAtrapada != null) {
    figuraAtrapada = null;
  }
}

