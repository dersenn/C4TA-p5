// Canvas Vars
const container = document.getElementById('p5-container')
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

// "Global" vars
let nRows = 11
let nCols = nRows
let boxW = canMin / nRows
let boxH = canMin / nCols

let zero

// p5 Setup
function setup() {
  let canvas = createCanvas(canW,canH,WEBGL)
  canvas.parent(container)
  // the bull starts here

  zero = {
    x: -(width/2) + boxW/2,
    y: -(height/2) + boxH/2,
    z: -(width/2) + boxW/2
  }
}

// animation vars
let n
let speed
let amp

let l1 = {}
let l2 = {}


let lightSpeed = .02
let evo = .2

// p5 Draw
function draw() {

  // ortho()
  background(0)
  // orbitControl()
  // noFill()
  stroke(255)
  noStroke()

  speed = frameCount / 500
  // amp = random(1, width/2)
  amp = width * 1.5
  off = 100


  l1.x = map(cos(speed),-1,1,-width, width)
  l1.y = map(sin(frameCount) * lightSpeed,-1,1,-height, height)

  l2.x = map(sin(frameCount) * lightSpeed,-1,1,-width, width)
  l2.y = map(cos(speed),-1,1,-height, height)


  pointLight(0, 255, 0, l1.x, l1.y, 0)
  pointLight(255, 0, 0, l2.x, l2.y, 0)
  // pointLight(0, 0, 255, 0, 0, width*4)


  for (let x = 0; x < nRows; x++) {
    for (let y = 0; y < nCols; y++) {

      n = noise((x+1) * speed, (y+1) * speed) * amp

      push()
      translate(zero.x + x*boxW, zero.y + y*boxH, -canW/nRows + n * evo)
      ambientMaterial(255,255,255)
      box(boxW)
      pop()
    }
  }

}
