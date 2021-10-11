let shapes = []
let direction = [-1,1]
let shapesList = ["box","sphere","cone","cylinder"]
let numbBalls = 20
let zMin = 0
let zMax = 400
let colorsList = [
  {r: 255, g: 0, b: 0},
  {r: 0, g: 255, b: 0},
  {r: 0, g: 0, b: 255}
]

let myFont
function preload(){
  myFont = loadFont('QueensVarTrial.ttf')
}
let txt = 'Hello'
let letters = []

// let moveX = 1
function setup() {
  createCanvas(400, 400,WEBGL)

  textFont(myFont)
  textSize(200)

  for (let l = 0; l < txt.length; l++) {
    shapes.push({
      letter: txt[l],
      x: random() * width, 
      y: random() * height, 
      z: random()*zMax, 
      moveX: random(direction), 
      moveY: random(direction),
      moveZ: random(direction), 
      speed: random(1,6), 
      size: random(40,40), 
      colorR: random(255),
      colorG: random(255),
      colorB: random(255), 
      rotX:random(PI*2),
      rotY:random(PI*2),
      rotZ:random(PI*2),
      shape:random(shapesList),
      color:random(colorsList)
    })
  }
  console.log(letters)

  
  // Objekte in den Array «pushen».
  // for (let n = 0; n < numbBalls; n+=1) {
  //   shapes.push({
  //     x: random() * width, 
  //     y: random() * height, 
  //     z: random()*zMax, 
  //     moveX: random(direction), 
  //     moveY: random(direction),
  //     moveZ: random(direction), 
  //     speed: random(1,6), 
  //     size: random(40,40), 
  //     colorR: random(255),
  //     colorG: random(255),
  //     colorB: random(255), 
  //     rotX:random(PI*2),
  //     rotY:random(PI*2),
  //     rotZ:random(PI*2),
  //     shape:random(shapesList),
  //     color:random(colorsList)
  //   })
  // }
}

function draw() {
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(250, 250, 250, -dirX, -dirY, -1);

  background(0)
  noFill()
  push()
  translate(0,0,-200)
  stroke(255)
  box(400)
  pop()
  translate(-200,-200,0)
  orbitControl();
  
  // Loop durch den Array
  for (let i = 0; i < shapes.length; i += 1) {

    // Varible mit einzelnem Element aus dem Array 
    let currentShape = shapes[i]
    let size = currentShape.size
    
    // Einen Kreis zeichnen
    noStroke()
    //ellipse(currentShape.x, currentShape.y, size)
    push()
    fill(currentShape.color.r, currentShape.color.g, currentShape.color.b)
    //noFill()
    //stroke(255)
    translate(currentShape.x,currentShape.y,-currentShape.z)
    rotateX(currentShape.rotX)
    rotateY(currentShape.rotY)
    rotateZ(currentShape.rotZ)

    // if (currentShape.shape == "box"){
    //   box(size)
    // } else if (currentShape.shape == "sphere"){
    //   sphere(size)
    // } else if (currentShape.shape == "cone"){
    //   cone(size)
    // } else{
    //   cylinder(size/2, size*2);
    // }

    text(currentShape.letter,0,0)


    pop()
    
    if (currentShape.x > width - size) {
        // currentShape.x -= moveX
        currentShape.moveX = -random()
    }
    if (currentShape.x < 0 + size) {
        // currentShape.x += moveX
        currentShape.moveX = random()
    }

    if (currentShape.y > height - size) {
        // currentShape.x -= moveX
        currentShape.moveY = -random()
    }
    if (currentShape.y < 0 + size ) {
        // currentShape.x += moveX
        currentShape.moveY = random()
    }

    if (currentShape.z > zMax - size) {
      // currentShape.x -= moveX
      currentShape.moveZ = -random()
  }
  if (currentShape.z < zMin + size ) {
      // currentShape.x += moveX
      currentShape.moveZ = random()
  }

    currentShape.x += currentShape.moveX * currentShape.speed
    currentShape.y += currentShape.moveY * currentShape.speed
    currentShape.z += currentShape.moveZ * currentShape.speed
    currentShape.rotX += 0.01
    currentShape.rotY += 0.01
    currentShape.rotZ += 0.01


    //console.log(currentShape.x)
    // Werte im Objekt ändern
    
    // currentShape.y += 1
  }
  if (frameCount == 100){
    //save('myCanvas.jpg');
  }
  
}