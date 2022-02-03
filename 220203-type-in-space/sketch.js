/*
Convert this (https://dersenn.github.io/C4TA-svg/211121-make-some-noise/3_dandelion.html) into 3d space.

Points on a sphere Distribution adapted from this (Processing):
https://openprocessing.org/sketch/69005/
Theory:
http://mathworld.wolfram.com/SpherePointPicking.html
*/


// Canvas Vars
const container = document.getElementById('p5-container')
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side
let landscape = false
if (canW > canH) landscape = true

// "Global" vars
let randomPoints = 100

let center
let sphereRadius = canMin / 2.5

// p5 Setup
function setup() {
  let canvas = createCanvas(canW,canH,WEBGL)
  canvas.parent(container)

  center = createVector(0,0,0)
  stroke(0,0,255)
  strokeWeight(5)
  rsp = new randomSpherePoints(randomPoints, sphereRadius, center)

  // v1 = createVector(0,0,0)
  // v2 = createVector(100,100,100)
  // let l = p5.Vector.lerp(v1,v2,.5)
  // console.log(l)
}

// animation vars
let rotX = .005
let rotY = .005

let l1 = {}
l1.dist = canW/2

// p5 Draw
function draw() {
  background(0)
  orbitControl()

  l1.speed = frameCount / 250
  l1.col = color(0,255,0)
  l1.pos = {
    x: 0,
    y: 0,
    z: 0
    // x: sin(l1.speed) * l1.dist,
    // y: cos(l1.speed) * l1.dist,
    // z: sin(l1.speed) * l1.dist
  }

  pointLight(0,255,0,l1.pos.x, l1.pos.y, l1.pos.z)

  push()
  rotateX(frameCount * rotX)
  rotateY(frameCount * rotY)
  rsp.draw()
  pop()

  // drawCenterPoint()
}

function drawCenterPoint() {
  push()
  stroke(255,0,0)
  strokeWeight(50)
  point(0,0,0)
  pop()
}
