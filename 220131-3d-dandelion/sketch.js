// Canvas Vars
const container = document.getElementById('p5-container')
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side
let landscape = false
if (canW > canH) landscape = true

// "Global" vars
let nRows = 11
let nCols = nRows
let boxW = canW / nCols
let boxH = canH / nRows

let zero

let cam

// p5 Setup
function setup() {
  let canvas = createCanvas(canW,canH,WEBGL)
  canvas.parent(container)
  // the bull starts here

  zero = {
    x: -(width/2) + boxW/2,
    y: -(height/2) + boxH/2,
    z: 0
  }

  cam = createCamera()

}

// animation vars
let n
let speed
let amp
let zOff

let cube = {}

let l1 = {}
let l2 = {}
let l3 = {}

let lightSpeed

// p5 Draw
function draw() {
  background(0)
  stroke(0,255,0)
  noStroke()
  // ortho()

  cam.dist = canW
  cam.speed = frameCount / 100
  cam.x = cos(cam.speed) * cam.dist
  cam.y = map(sin(cam.speed),-1,1,-cam.dist/2,cam.dist/2)
  cam.z = sin(cam.speed) * cam.dist

  cam.lookAt(0,0,0)
  cam.setPosition(cam.x, cam.y, cam.z)

  lightSpeed = frameCount / 50

  l1.c = color(0,255,0)
  l1.x = cos(lightSpeed) * width
  l1.y = sin(lightSpeed/2) * height
  l1.z = 0

  l2.c = color(255,0,0)
  l2.x = sin(lightSpeed) * height
  l2.y = cos(lightSpeed) * width
  l2.z = 0

  l3.c = color(0,0,255)
  l3.x = 0
  l3.y = 0 //cos(-lightSpeed) * width
  l3.z = sin(-lightSpeed/2) * height

  pointLight(l1.c, l1.x, l1.y, l1.z)
  pointLight(l2.c, l2.x, l2.y, l2.z)
  pointLight(l3.c, l3.x, l3.y, l3.z)

  speed = frameCount / 1000
  amp = boxW * 5

  for (let x = 0; x < nRows; x++) {
    for (let y = 0; y < nCols; y++) {

      n = noise((x+1) * speed, (y+1) * speed)

      // cube.ext = n * amp
      cube.off = map(n,0,1,-boxW/2,boxW/2)
      cube.x = zero.x + x * boxW
      cube.y = zero.y + y * boxH
      cube.z = cube.off

      push()
      // translate(cube.x, cube.y, cube.z)
      translate(cube.x, cube.y, cube.z)
      // normalMaterial()
      ambientMaterial(255,255,255)
      box(boxW, boxH, boxW)
      // box(boxW, boxH, cube.ext)
      pop()
    }
  }

}
