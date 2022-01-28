// Canvas Vars
const container = document.getElementById('p5-container')
let canW = container.offsetWidth //canvas Width
let canH = container.offsetHeight //canvas Height
let canMax = Math.max(canW, canH) //longer canvas side
let canMin = Math.min(canW, canH) //shorter canvas side

// "Global" vars
let nRows = 3
let nCols = nRows
let boxW = canMin / nRows
let boxH = canMin / nCols

let zero


// p5 Setup
function setup() {
  let canvas = createCanvas(canW,canH,WEBGL)
  canvas.parent(container)
  // the bull starts here
}

// p5 Draw
function draw() {
  background(0)
  orbitControl()
  noFill()
  stroke(0,255,0)

  zero = {
    x: -(width/2) + boxW/2,
    y: -(height/2) + boxH/2,
    z: -(width/2) + boxW/2
  }

  for (let x = 0; x < nRows; x++) {
    for (let y = 0; y < nCols; y++) {
      push()
      translate(zero.x + x*boxW, zero.y + y*boxH, zero.z * random())
      box(boxW)
      pop()
    }
  }

}
