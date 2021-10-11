let shapes = []
let direction = [-1,1]
let numbBalls = 10

// let moveX = 1
function setup() {
  createCanvas(400, 400)
  
  // Zwei Objekte in den Array «pushen».
  for (let n = 0; n < numbBalls; n+=1){
    shapes.push({x: random() * width, y: random() * height, moveX: random(direction), moveY: random(direction), speed: random(1,6), size: random(10,50)})
  }
  // Dies könntest du auch mit einem Loop machen.
}

function draw() {
  //background(0)

  // Loop durch den Array
  for (let i = 0; i < shapes.length; i += 1) {
    // Varible mit einzelnem Element aus dem Array 
    let currentShape = shapes[i]
    let size = currentShape.size
    
    // Einen Kreis zeichnen
    ellipse(currentShape.x, currentShape.y, size)
    
    if (currentShape.x > width - size / 2) {
        // currentShape.x -= moveX
        currentShape.moveX = -random()
    }
    if (currentShape.x < 0 + size / 2 ) {
        // currentShape.x += moveX
        currentShape.moveX = random()
    }

    if (currentShape.y > height - size / 2) {
        // currentShape.x -= moveX
        currentShape.moveY = -random()
    }
    if (currentShape.y < 0 + size / 2 ) {
        // currentShape.x += moveX
        currentShape.moveY = random()
    }

    currentShape.x += currentShape.moveX * currentShape.speed
    currentShape.y += currentShape.moveY * currentShape.speed

    // console.log(currentShape.x)
  }

  if (frameCount == 100) {
    save('myCanvas.jpg')
  }
  
}