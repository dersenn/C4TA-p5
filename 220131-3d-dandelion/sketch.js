/*
Convert this (https://dersenn.github.io/C4TA-svg/211121-make-some-noise/3_dandelion.html) into 3d space.

Points on a sphere example (p5):
https://editor.p5js.org/black/sketches/Sk3w2V6YM
Distribution (Processing):
https://openprocessing.org/sketch/69005/
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
let randomPoints = 50
let rotX, rotY = 0

let center
let sphereSize = canW / 3

// p5 Setup
function setup() {
  let canvas = createCanvas(canW,canH,WEBGL)
  canvas.parent(container)

  center = createVector(0,0,0)
  stroke(0,0,255)
  strokeWeight(5)
  rsp = new randomSpherePoints(randomPoints, sphereSize, center)

  console.log(rsp)
}



// p5 Draw
function draw() {
  background(0)
  orbitControl()
  rsp.draw()
  // rotY += 0.002;


  drawCenterPoint()
}



function drawCenterPoint() {
  stroke(255,0,0)
  strokeWeight(10)
  point(0,0,0)
}
